const { Builder, By, until } = require("selenium-webdriver");
require("geckodriver");

const fileUnderTest =
  "file://" + __dirname.replace(/ /g, "%20") + "/../dist/index.html";
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
  console.log(fileUnderTest);
  driver = await new Builder().forBrowser("firefox").build();
  await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async () => {
  await driver.quit();
}, defaultTimeout);

test("The stack should be empty in the beginning", async () => {
  let stack = await driver.findElement(By.id("top_of_stack")).getText();
  expect(stack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
  it("should open a prompt box", async () => {
    let push = await driver.findElement(By.id("push"));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Bananer");
    await alert.accept();
  });
});

describe('Clicking "Vad finns överst på stacken?"', () => {
  it('should display the top element of the stack in the "top_of_stack"-span', async () => {
    const push = await driver.findElement(By.id("push"));
    await push.click();
    const alert = await driver.switchTo().alert();
    await alert.sendKeys("Fler Bananer");
    await alert.accept();

    const peek = await driver.findElement(By.id("peek"));
    await peek.click();

    const stackText = await driver.findElement(By.id("top_of_stack")).getText();
    expect(stackText).toEqual("Fler Bananer");
  });
});
