---
title: My experience with winery
summary: A very effective open source tool for porting exe files in macos
slug: kegworks-winery
---
Okay, got it\! Let's make this sound like a human, not a robot, and keep it casual.

# How I Got My Windows Apps Running on macOS with Winery + KegWorks (No Heavy VMs\!)

Okay, so if you're an engineering student like me, you probably know the pain: you're on a sweet Mac, but then BAM\! That one essential piece of software for your ECE lab, or some niche simulation tool, is *Windows-only*. It's super annoying when official support for macOS is just... not there.

I've been down the rabbit hole of trying different things – Parallels, VirtualBox, you name it. And while they *work*, they're often kinda clunky. They eat up tons of RAM and disk space, force you to install a whole Windows operating system (which is a headache with licenses and all), and just feel heavy.

So, I was on the hunt for something lighter, something that could make these Windows apps feel more like native macOS apps – just double-click and go. And that's when I stumbled upon this awesome combo: **Winery** with **KegWorks**. Total game-changer\!

## Why Not Just Use Parallels or VirtualBox?

Honestly, those are fine for some folks, but for me, they were overkill:

  * They're **resource hogs**. Seriously, my Mac would groan.
  * You gotta deal with a **full Windows install**, and who wants that extra baggage (and potential licensing drama)?
  * They just don't feel as *integrated*. I wanted something that felt more seamless.

That's why Winery was so appealing – it's all about keeping things lean.

## So, What Exactly Are Winery & KegWorks?

Think of **Winery** as this clever tool that basically wraps your Windows `.exe` file into a neat little macOS `.app` bundle. It uses something called Wine (which, fun fact, originally stood for "Wine Is Not an Emulator" – it translates Windows stuff directly to macOS, which is why it's usually faster than a full VM). You can even tweak which Wine engine it uses, which is pretty cool.

**KegWorks** then steps in to make things even better. It provides custom Wine engines and generally just improves compatibility, especially for newer macOS versions. It's like the secret sauce that makes Winery even more powerful.

## My Installation Journey (Super Easy\!)

Here's how I got it all set up. It's pretty straightforward, even if you're not a terminal wizard:

### 1\. Get Homebrew & KegWorks

First, make sure you've got Homebrew installed on your Mac. If not, just paste this into your Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew's good to go, install KegWorks:

```bash
brew tap kegdev/keg
brew install keg-cli
```

### 2\. Grab Winery

You can either clone the Winery GitHub repo (for the techy folks) or just download the DMG from their page. I usually go for the DMG for simplicity:

[https://github.com/Gcenx/WineskinServer](https://github.com/Gcenx/WineskinServer)

Once it's downloaded, just drag and drop the Winery app into your `/Applications` folder. Easy peasy\!

## Wrapping Up a Windows App (My PSpice Example)

Okay, now for the fun part – getting that Windows app into its new macOS home. Here’s how I did it for PSpice:

### Step 1: Fire Up Winery

Open Winery. It'll ask you to create a "new blank wrapper." Give it a name that makes sense, like `PSpiceWrapper`.

### Step 2: Engine Time\!

Winery has a "Download Engines" feature, which is usually the easiest. Or, if you've got a specific `WS11WineCX64Bit` engine from KegWorks, you can drop that in manually.

### Step 3: Make the Wrapper

After the engine's installed, click "Create Wrapper." Winery will do its thing and spit out a `.app` file.

You'll find it here:

```bash
~/Applications/Wineskin/
```

Now, this is a little trick: Right-click on your new wrapper (e.g., `PSpiceWrapper.app`) and choose **Show Package Contents**. Inside, you'll find another app called `Wineskin.app`. Open *that one*.

## Installing the Actual `.exe`

Now you're basically inside a mini-Windows environment within your Mac app:

1.  In `Wineskin.app`, click **Install Software**.
2.  Choose **Choose Setup Executable**.
3.  Navigate to wherever your Windows `.exe` installer is saved (like the PSpice installer).
4.  Then, just follow the Windows installer steps like you would on a regular PC.

Once the installation finishes, Winery will smartly ask you to pick which `.exe` file should be the main one to launch when you double-click your new macOS app. Pick the main executable of your newly installed software.

## Running It\!

Boom\! That's it. Now, you can just double-click your `.app` file (e.g., `PSpiceWrapper.app`) from your Applications folder or wherever you saved it. It launches just like any other Mac app, and for most academic software, the performance is surprisingly good. No need for a bulky Windows VM eating up your precious resources\!

## Real-World Wins

I've personally used this setup to get a bunch of Windows-only stuff running smoothly on my Mac:

  * **PSpice** (finally\!)
  * Some tricky **MATLAB Simulink addons** that only had Windows versions.
  * Even older versions of **LTspice**.
  * And those old-school **8051 simulator IDEs** from my microcontrollers class.

Sometimes, you might need a tiny tweak here or there, like messing with DLL overrides or fixing DPI scaling, but you can usually do all that right within Winery's "Advanced" settings.

## Quick Fixes I've Used

### Weird DPI Scaling?

If things look tiny or huge, try this in `Winetricks` (accessible from Winery's settings):

```bash
winetricks settings dpi=120
```

### Missing DLLs?

If an app complains about a missing DLL, `Winetricks` is your friend again:

```bash
winetricks dlls [dllname]
```

For example, if it needs `mfc42`:

```bash
winetricks dlls mfc42
```

## My Two Cents

For students or anyone who just needs to use specific Windows-only tools occasionally, this **Winery + KegWorks** combo is seriously effective. It's so much lighter than a full VM and offers pretty solid compatibility for most educational stuff.

It's not magic, so occasionally an app might be stubborn, but honestly, with a little patience and a few tweaks, you can usually get things going in no time. It's totally worth avoiding the VM struggle\!

**Got questions? Need help with a specific tool?** Hit me up\! Happy to share tips with fellow students trying to escape the virtual machine trap.