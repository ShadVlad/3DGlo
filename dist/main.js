(() => {
  "use strict";
  const e = (e) => {
    const t = document.querySelector(".popup"),
      a = document.createElement("div");
    (a.style.cssText = "font-size: 2rem;"),
      "form3" === e.id && (a.style.color = "white"),
      e.addEventListener("submit", (n) => {
        n.preventDefault();
        const l = new FormData(e);
        let c = {};
        l.forEach((e, t) => {
          c[t] = e;
        }),
          c.user_name.length < 2
            ? alert("Имя должно содержать от 2 до 30 символов")
            : c.user_phone.length < 7 || c.user_phone.length > 12
            ? alert(
                "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
              )
            : ((a.textContent = "Загрузка..."),
              e.appendChild(a),
              r(c)
                .then((e) => {
                  if (200 !== e.status)
                    throw new Error("status network not 200");
                  (a.textContent = "Спасибо! Мы скоро с Вами свяжемся!"),
                    o(),
                    setTimeout(() => {
                      t.style.display = "none";
                    }, 5e3);
                })
                .catch(() => {
                  a.textContent = "Что-то пошло не так...";
                }));
      });
    const r = (e) =>
        fetch("server.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        }),
      o = () => {
        const t = e.querySelector("input[name='user_name']"),
          a = e.querySelector("input[name='user_email']"),
          r = e.querySelector("input[name='user_message']"),
          o = e.querySelector("input[name='user_phone']");
        (t.value = ""), (a.value = ""), (o.value = ""), r && (r.value = "");
      };
  };
  (function (e) {
    let t = document.querySelector("#timer-hours"),
      a = document.querySelector("#timer-minutes"),
      r = document.querySelector("#timer-seconds");
    function o(e) {
      return e < 10 ? "0" + e : e;
    }
    function n() {
      let e = (function () {
        let e = new Date("30 july 2021").getTime(),
          t = new Date().getTime(),
          a = e - t > 0 ? (e - t) / 1e3 : 0,
          r = Math.floor(a % 60),
          o = Math.floor((a / 60) % 60);
        return {
          timeRemaining: a,
          hours: Math.floor((a / 60 / 60) % 24),
          minutes: o,
          seconds: r,
        };
      })();
      (t.textContent = o(e.hours)),
        (a.textContent = o(e.minutes)),
        (r.textContent = o(e.seconds));
    }
    n(), setInterval(n, 1e3);
  })(),
    (() => {
      const e = document.querySelector(".menu"),
        t = document.querySelector("menu"),
        a = () => {
          t.classList.toggle("active-menu");
        };
      e.addEventListener("click", a),
        t.addEventListener("click", (e) => {
          let t = e.target;
          (t.classList.contains("close-btn") || "A" === t.tagName) && a();
        });
    })(),
    (() => {
      const e = document.querySelector(".popup"),
        t = document.querySelector("body"),
        a = document.querySelector(".popup-content"),
        r = document.querySelectorAll(".popup-btn");
      let o, n;
      const l = () => {
        (o = requestAnimationFrame(l)),
          (n += 5),
          n < 38 ? (a.style.left = n + "%") : cancelAnimationFrame(o);
      };
      r.forEach((a) => {
        a.addEventListener("click", () => {
          (e.style.display = "block"),
            (n = -50),
            t.offsetWidth >= 768 && (o = requestAnimationFrame(l));
        });
      }),
        e.addEventListener("click", (t) => {
          let a = t.target;
          a.classList.contains("popup-close")
            ? (e.style.display = "none")
            : ((a = a.closest(".popup-content")),
              a || (e.style.display = "none"));
        });
    })(),
    (() => {
      const e = document.querySelector(".service-header"),
        t = document.querySelectorAll(".service-header-tab"),
        a = document.querySelectorAll(".service-tab"),
        r = (e) => {
          for (let r = 0; r < a.length; r++)
            e === r
              ? (t[r].classList.add("active"), a[r].classList.remove("d-none"))
              : (t[r].classList.remove("active"), a[r].classList.add("d-none"));
        };
      r(0),
        e.addEventListener("click", (e) => {
          let a = e.target;
          (a = a.closest(".service-header-tab")),
            a &&
              t.forEach((e, t) => {
                e === a && r(t);
              });
        });
    })(),
    (() => {
      const e = document.querySelectorAll(".portfolio-item"),
        t =
          (document.querySelectorAll(".portfolio-btn"),
          document.querySelector(".portfolio-dots")),
        a = document.querySelector(".portfolio-content");
      let r,
        o,
        n = 0;
      const l = (e, t, a) => {
          e[t].classList.remove(a);
        },
        c = (e, t, a) => {
          e[t].classList.add(a);
        },
        s = () => {
          l(e, n, "portfolio-item-active"),
            l(r, n, "dot-active"),
            n++,
            (n %= e.length),
            c(e, n, "portfolio-item-active"),
            c(r, n, "dot-active");
        },
        u = (e = 3e3) => {
          o = setInterval(s, e);
        };
      a.addEventListener("click", (t) => {
        t.preventDefault();
        let a = t.target;
        a.matches(".portfolio-btn, .dot") &&
          (l(e, n, "portfolio-item-active"),
          l(r, n, "dot-active"),
          a.matches("#arrow-right")
            ? n++
            : a.matches("#arrow-left")
            ? n--
            : a.matches(".dot") &&
              r.forEach((e, t) => {
                e === a && (n = t);
              }),
          n >= e.length && (n = 0),
          n < 0 && (n = e.length - 1),
          c(e, n, "portfolio-item-active"),
          c(r, n, "dot-active"));
      }),
        a.addEventListener("mouseover", (e) => {
          (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) &&
            clearInterval(o);
        }),
        a.addEventListener("mouseout", (e) => {
          (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) &&
            u();
        }),
        (() => {
          for (let a = 1; a <= e.length; a++) {
            let e = document.createElement("li");
            e.classList.add("dot"),
              1 === a && e.classList.add("dot-active"),
              t.append(e);
          }
          r = document.querySelectorAll(".dot");
        })(),
        u(1500);
    })(),
    (() => {
      const e = document.querySelector(".command");
      e.addEventListener("mouseover", (e) => {
        e.target.matches(".command__photo") &&
          (e.target.src = e.target.dataset.img);
      }),
        e.addEventListener("mouseout", (e) => {
          e.target.matches(".command__photo") &&
            (e.target.src = e.target.dataset.img.replace("a.", "."));
        });
    })(),
    ((e = 100) => {
      const t = document.querySelector(".calc-block"),
        a = document.querySelector(".calc-type"),
        r = document.querySelector(".calc-square"),
        o = document.querySelector(".calc-day"),
        n = document.querySelector(".calc-count"),
        l = document.getElementById("total"),
        c = document.querySelectorAll(".calc-item");
      t.addEventListener("change", (t) => {
        const c = t.target;
        (c.matches("select") || c.matches("input")) &&
          (() => {
            let t = 0,
              c = 1,
              s = 1;
            const u = a.options[a.selectedIndex].value,
              i = +r.value;
            n.value > 1 && (c += (n.value - 1) / 10),
              o.value && o.value < 5
                ? (s *= 2)
                : o.value && o.value < 10 && (s *= 1.5),
              u && i
                ? ((t = e * u * i * c * s), (t = 1.4 == u ? t.toFixed(0) : t))
                : (t = 0),
              (l.textContent = t);
          })();
      });
      const s = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/, "");
      };
      c.forEach((e) => {
        e.addEventListener("keyup", s);
      });
    })(100),
    (() => {
      const e = document.querySelectorAll("form"),
        t = document.querySelectorAll("input[name='user_name']"),
        a = document.querySelectorAll("input[name='user_message']"),
        r = document.querySelectorAll("input[name='user_email']"),
        o = document.querySelectorAll("input[name='user_phone']"),
        n = () => {
          let e = event.target.value.replace(/\-{2,}/g, "-");
          (e.length < 2 || e.length > 30) &&
            alert("Имя должно содержать от 2 до 30 символов"),
            (e = e.split(/\s+/)),
            (event.target.value = e
              .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join(" "));
        },
        l = () => {
          let e = event.target.value.replace(/\-{2,}/g, "-");
          (e = e.split(/\s+/)),
            (e[0] = e[0].charAt(0).toUpperCase() + e[0].slice(1)),
            (event.target.value = e.map((e) => e).join(" "));
        },
        c = () => {
          let e = event.target.value.replace(/[^\d\+]/, "");
          (e.length < 7 || e.length > 12) &&
            alert(
              "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
            ),
            (e = e.replace(/\-{2,}/g, "-")),
            (event.target.value = e);
        },
        s = () => {
          let e = event.target.value.replace(/[^A-Za-z\.\@\-\!\*\'\~]/g, "");
          (e = e.replace(/\-{2,}/g, "-")),
            (e = e.replace(/\-/, "")),
            (e = e.replace(/\-$/, "")),
            (event.target.value = e);
        };
      e.forEach((e) => {
        e.addEventListener("keyup", (e) => {
          if (e.target.matches("input[name='user_name']")) {
            if (
              (((e) => {
                e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s]+$/, "");
              })(e),
              e.target.value.length > 30)
            )
              return (
                alert("Имя должно содержать от 2 до 30 символов"),
                void (e.target.value = e.target.value.slice(0, 30))
              );
          } else if (e.target.matches("input[name='user_message']"))
            ((e) => {
              e.target.value = e.target.value.replace(
                /[^?!,.а-яА-ЯёЁ0-9]+$/,
                ""
              );
            })(e);
          else if (e.target.matches("input[name='user_email']"))
            ((e) => {
              e.target.value = e.target.value.replace(
                /[^A-Za-z\.\@\-\!\*\'\~]/,
                ""
              );
            })(e);
          else if (
            e.target.matches("input[name='user_phone']") &&
            (((e) => {
              e.target.value = e.target.value.replace(/[^\d\+]/, "");
            })(e),
            e.target.value.length > 12)
          )
            return (
              alert(
                "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
              ),
              void (e.target.value = e.target.value.slice(0, 12))
            );
        });
      }),
        t.forEach((e) => {
          e.addEventListener("blur", (e) => {
            n();
          });
        }),
        a.forEach((e) => {
          e.addEventListener("blur", (e) => {
            l();
          });
        }),
        o.forEach((e) => {
          e.addEventListener("blur", (e) => {
            e.target.value, c();
          });
        }),
        r.forEach((e) => {
          e.addEventListener("blur", (e) => {
            s();
          });
        });
    })();
  for (let t = 1; t < 4; t++) e(document.getElementById("form" + t));
})();
