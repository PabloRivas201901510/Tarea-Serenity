require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;


describe('login', function() {
  //TEST 1
  describe('inicio de sesion', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('login', async function() {
      await driver.get("http://localhost:4200/inicio")
      await driver.manage().window().setRect({ width: 1382, height: 744 })
      await driver.findElement(By.id("staticEmail")).click()
      await driver.findElement(By.css("app-inicio")).click()
      await driver.findElement(By.xpath("//input[@id=\'staticEmail\']")).sendKeys("pdanielr225@outlook.com")
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword1\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword1\']")).sendKeys("123")
      await driver.findElement(By.xpath("//button[contains(.,\'Iniciar sesion\')]")).click()
    })
  })

  //TEST 2
  describe('lredireccion a registro', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('login2', async function() {
      await driver.get("http://localhost:4200/inicio")
      await driver.manage().window().setRect({ width: 903, height: 690 })
      await driver.findElement(By.xpath("//button[contains(.,\'Registrarse\')]")).click()
    })
  })
  
})
  

describe('registro', function() {

  
  describe('registro1', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('registro1', async function() {
      await driver.get("http://localhost:4200/registro")
      await driver.manage().window().setRect({ width: 903, height: 690 })
      await driver.findElement(By.xpath("//input[@type=\'text\']")).click()
      await driver.findElement(By.xpath("//input[@type=\'text\']")).sendKeys("201901510")
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[2]")).click()
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[2]")).sendKeys("Pablo")
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[3]")).click()
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[3]")).sendKeys("Rivas")
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[5]")).click()
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[5]")).sendKeys("28/01/2000")
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword1\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword1\']")).sendKeys("123")
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword2\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword2\']")).sendKeys("123")
      await driver.findElement(By.xpath("//button[contains(.,\'Registrarse\')]")).click()
    })
  })

  describe('registro2', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('registro1', async function() {
      await driver.get("http://localhost:4200/registro")
      await driver.manage().window().setRect({ width: 903, height: 690 })
      await driver.findElement(By.xpath("//input[@type=\'text\']")).click()
      await driver.findElement(By.xpath("//input[@type=\'text\']")).sendKeys("202001842")
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[2]")).click()
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[2]")).sendKeys("Luis")
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[3]")).click()
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[3]")).sendKeys("Mendez")
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[5]")).click()
      await driver.findElement(By.xpath("(//input[@type=\'text\'])[5]")).sendKeys("01/05/2001")
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword1\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword1\']")).sendKeys("123")
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword2\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'exampleInputPassword2\']")).sendKeys("123")
      await driver.findElement(By.xpath("//button[contains(.,\'Registrarse\')]")).click()
    })
  }) 

 
  

})

describe('asignacion', function() {

  describe('Asignacion de Laboratorio', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('asignar1', async function() {
      await driver.get("http://localhost:4200/asignacion")
      await driver.manage().window().setRect({ width: 903, height: 690 })
      await driver.findElement(By.id("staticEmail")).click()
      await driver.findElement(By.id("staticEmail")).sendKeys("0283")
      await driver.findElement(By.css(".col-sm-10:nth-child(5) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(5) > .form-control-plaintext")).sendKeys("Pablo Daniel Rivas Marroquin")
      await driver.findElement(By.css(".col-sm-10:nth-child(7) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(7) > .form-control-plaintext")).sendKeys("Laboratorio Analisis y Diseño 1")
      await driver.findElement(By.css(".col-sm-10:nth-child(9) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(9) > .form-control-plaintext")).sendKeys("N")
      await driver.findElement(By.css(".col-sm-10:nth-child(11) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(11) > .form-control-plaintext")).sendKeys("Lunes,Martes,Miercoles,Jueves,Viernes")
      await driver.findElement(By.css(".col-sm-10:nth-child(13) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(13) > .form-control-plaintext")).sendKeys("11:00")
      await driver.findElement(By.css(".btn")).click()
    })
  })
  

  describe('aAsignacion de Clase Magistral', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('asignar2', async function() {
      await driver.get("http://localhost:4200/asignacion")
      await driver.manage().window().setRect({ width: 903, height: 690 })
      await driver.findElement(By.id("staticEmail")).click()
      await driver.findElement(By.id("staticEmail")).sendKeys("0283")
      await driver.findElement(By.css(".col-sm-10:nth-child(5) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(5) > .form-control-plaintext")).sendKeys("Pablo Daniel Rivas Marroquin")
      await driver.findElement(By.css(".col-sm-10:nth-child(7) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(7) > .form-control-plaintext")).sendKeys("Magistral Analisis y Diseño 1")
      await driver.findElement(By.css(".col-sm-10:nth-child(9) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(9) > .form-control-plaintext")).sendKeys("N")
      await driver.findElement(By.css(".col-sm-10:nth-child(11) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(11) > .form-control-plaintext")).sendKeys("Lunes,Martes,Miercoles,Jueves,Viernes")
      await driver.findElement(By.css(".col-sm-10:nth-child(13) > .form-control-plaintext")).click()
      await driver.findElement(By.css(".col-sm-10:nth-child(13) > .form-control-plaintext")).sendKeys("19:00")
      await driver.findElement(By.css(".btn")).click()
    })
  })
  

})
