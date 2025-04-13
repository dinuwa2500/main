# 💻 Laptop Usage Tracker

![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Platform](https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macOS-lightgrey.svg)

A lightweight background application that tracks your laptop usage sessions, excluding shutdown time, with beautiful reporting.

![Usage Summary Screenshot](https://i.imgur.com/JQ6ZzlL.png)  
*(Example summary output)*

## ✨ Features

- 🕒 Accurate session tracking (even during sleep/wake cycles)
- 📊 Human-readable reports (years/months/days/hours/minutes)
- 📂 Automatic data persistence (JSON + plaintext summary)
- 🔄 Background operation (daemon mode for Linux/macOS)
- 📱 Mobile-friendly summary view
- 🚦 System tray icon (optional)

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/laptop-usage-tracker.git
cd laptop-usage-tracker

# Install dependencies
pip install psutil
