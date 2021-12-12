const {Builder, By, Actions, Key, util} = require("selenium-webdriver");

async function Lab()
{
    let driver = new Builder().forBrowser('firefox').build();
   try {
    await driver.get('https://opensource-demo.orangehrmlive.com/');
    await driver.findElement(By.id('txtUsername')).sendKeys('Admin');
    await driver.findElement(By.id('txtPassword')).sendKeys('admin123');
    await driver.findElement(By.id('btnLogin')).click();
    await driver.findElement(By.id('menu_admin_viewAdminModule')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('menu_admin_Job')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('menu_admin_workShift')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('btnAdd')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('workShift_name')).sendKeys('ShiftName');
    await driver.sleep(500);
    await driver.findElement(By.css('#workShift_workHours_from > option:nth-child(26)')).click();
    await driver.findElement(By.css('#workShift_workHours_to > option:nth-child(74)')).click();

    for(let i =0; i < 10; i++)
    {
        await driver.findElement(By.css('#workShift_availableEmp option:first-child')).click();
        await driver.findElement(By.id('btnAssignEmployee')).click();
    }
    await driver.findElement(By.id('btnSave')).click();
    const el = await driver.findElement(By.xpath("//td[@class='left']/a[text()='ShiftName']"));
    const row = await el.findElement(By.xpath('./../..'));
    
    if (
        (
          await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed()).valueOf() &&
        (
          await row.findElement(By.xpath('td[text()="18:00"]')).isDisplayed()).valueOf() &&
        (
          await row.findElement(By.xpath('td[text()="12.00"]')).isDisplayed()).valueOf() &&
        (await row.findElement(By.xpath('td[1]/input')).isDisplayed()).valueOf()) {
        await row.findElement(By.xpath('td[1]/input')).click()
      } else {
        throw new Error('Element is not present in the list');
      }
    
      await driver.findElement(By.id('btnDelete')).click();
      await driver.findElement(By.id('dialogDeleteBtn')).click();
    
      try {
        await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed();
      } catch (e) {
        console.log('Element is no more present in the list');
      }
    } finally {
        await driver.sleep(1000);
        await driver.quit();
    }

}
Lab();