---
title: My experience with winery
summary: A very effective open source tool for porting exe files in macos
slug: kegworks-winery
---


# Porting Windows Apps to macOS with Winery + KegWorks

> A practical guide to running Windows-only student software on macOS

As an engineering student, I've often faced a frustrating reality — many academic tools and simulation programs are **designed only for Windows**. Whether it’s circuit simulators for ECE, proprietary control system GUIs, or legacy lab software, macOS users are often left without official support.

After experimenting with multiple virtualization and compatibility options, I found a **lightweight, efficient solution**: **Winery** combined with **KegWorks**, a Wine-based wrapper system for macOS.

---

## Why Not Parallels or VirtualBox?

Solutions like **Parallels Desktop** or **VirtualBox** are viable, but:

* They’re **heavyweight**, consuming significant RAM and disk.
* Require a full Windows ISO and installation.
* Often involve **licensing** or activation issues.

I wanted something **leaner**, that could launch apps directly like native `.app` files — enter Winery.

---

## What is Winery?

**Winery** is a wrapper creator that uses Wine to bundle a Windows executable (`.exe`) into a macOS app bundle. It allows customization of Wine engines and integrates with macOS seamlessly.

**KegWorks** extends Winery by offering **custom Wine engines** and better compatibility for newer macOS versions.

---

## Installation Steps

### 1. Install Homebrew and KegWorks

Ensure Homebrew is installed:
```
/bin/bash -c "\$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
```

Install KegWorks:
```
brew tap kegdev/keg
brew install keg-cli
```

### 2. Install Winery

Clone the Winery GitHub repo or download the DMG:
[https://github.com/Gcenx/WineskinServer](https://github.com/Gcenx/WineskinServer)

Move Winery to `/Applications`.

---

## Wrapping a Windows App

Let’s walk through how I wrapped a Windows-only `.exe` using Winery + KegWorks:

### Step 1: Launch Winery

Open Winery and create a new blank wrapper. Name it something relevant like `PSpiceWrapper`.

### Step 2: Update/Install an Engine

Use Winery's **“Download Engines”** feature or manually place your `WS11WineCX64Bit` engine from KegWorks.

### Step 3: Create Wrapper

After engine installation, create the wrapper. Winery builds a `.app` file.

Navigate to:
```
\~/Applications/Wineskin/
```
Right-click your wrapper → **Show Package Contents** → launch `Wineskin.app`.

---

## Installing the `.exe`

1. Open the wrapper’s `Wineskin.app`.
2. Click **Install Software** → **Choose Setup Executable**.
3. Browse to your `.exe` installer.
4. Proceed with the install like on Windows.

After installation, Winery will let you choose the main `.exe` file as the default run target.

---

## Running the App

Once wrapped, you can double-click your `.app` just like any Mac app. Performance is generally good for academic software, and no full Windows VM is needed.

---

## Real-World Usage

Here are a few tools I successfully ran on my Mac:

* **PSpice**
* **MATLAB Simulink addons (Windows-only plugins)**
* **LTspice (older versions)**
* **8051 simulator IDEs**

Some apps needed minor Wine tweaks (DLL overrides, DPI scaling fixes), which can be configured inside Winery → Advanced.

---

## Common Fixes

### DPI Scaling Issues

In `Winetricks`, enable system DPI scaling:
```
winetricks settings dpi=120
```

### Missing DLLs

Use:
```
winetricks dlls \[dllname]
```
Example:
```
winetricks dlls mfc42
```

---

## Final Thoughts

For students or developers who need occasional access to Windows-only tools, **Winery + KegWorks** is a highly efficient setup. It avoids the bloat of full VMs while providing sufficient compatibility for most educational tools.

It’s not perfect — some apps may still crash or misbehave — but in most cases, with a few tweaks, you’ll be up and running in minutes.

---

**Have questions or need help wrapping a specific tool?**
Drop a comment or message me via my portfolio – happy to help fellow students escape the VM trap.

---
