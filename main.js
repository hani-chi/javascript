console.log("log");

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("Hello CAPS");
  });
});

// helper methods

alert({ name: "HiHi Hani", age: 17, email: "hanah@hanah.com", active: true });

document.write({ name: "HiHi Hani", email: "hanah@hanah.com" });

console.log({ name: "HiHi Hani", email: "hanah@hanah.com" });
