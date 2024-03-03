import { test, expect } from '@playwright/test';

const baseUrl = "https://github.com/";
const login = "damitra@ya.ru";
const pass = "Parabellum0793";
const incorrectPass = "12345678";

test("simple authorization", async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByLabel("Username or email address").fill(login);
  await page.getByLabel("Password").fill(pass);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Home", exact: true })).toBeVisible();
  
});

test("incorrect pass", async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByLabel("Username or email address").fill(login);
  await page.getByLabel("Password").fill(incorrectPass);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByText("Incorrect username or")).toBeVisible();
});