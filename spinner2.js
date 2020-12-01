let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\n'];
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => process.stdout.write(spinner[i]), 150 * i);
}