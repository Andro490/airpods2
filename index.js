// بتاع صور مكررة زي فيلم
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image"); // جميع الصور
  const imageCount = images.length; // عدد الصور
  const scrollStep = 50; // كل إطار يظهر بعد 100 بكسل تمرير

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY; // موضع التمرير الحالي
    const index = Math.min(
      Math.floor(scrollPos / scrollStep), // حساب الصورة المناسبة
      imageCount - 1 // التأكد من عدم تجاوز عدد الصور
    );

    // إظهار الصورة المناسبة وإخفاء الباقي
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  });
});

//بتاع كلمة تختفي بتدريج

// كود الجافاسكريبت لإخفاء النص تدريجيًا
window.addEventListener("scroll", () => {
  const heading = document.querySelector(".fade");
  const scrollY = window.scrollY;

  // التدرج بين 1 و 0 حتى 1823 بكسل
  let opacity = 1 - scrollY / 1823;

  // التأكد من أن القيمة لا تقل عن 0
  opacity = Math.max(opacity, 0);

  // تطبيق الشفافية على العنصر
  heading.style.opacity = opacity;
});


// ظهر صورة وتختفي تدليج
window.addEventListener("scroll", () => {
  const image = document.querySelector(".fade-image");
  const scrollY = window.scrollY;

  // تحديد نطاق الظهور
  const startShow = 2800;
  const endShow = 3000;

  // تحديد نطاق الاختفاء
  const startHide = 3000;
  const endHide = 3640;

  // إذا كان التمرير داخل نطاق الظهور
  if (scrollY >= startShow && scrollY <= endShow) {
    let opacity = (scrollY - startShow) / (endShow - startShow);
    image.style.opacity = opacity; // يظهر تدريجياً
  }
  // إذا كان التمرير داخل نطاق الاختفاء
  else if (scrollY > startHide && scrollY <= endHide) {
    let opacity = 1 - (scrollY - startHide) / (endHide - startHide);
    image.style.opacity = opacity; // يختفي تدريجياً
  }
  // إخفاء الصورة خارج النطاقين
  else if (scrollY < startShow || scrollY > endHide) {
    image.style.opacity = 0;
  }
  // إظهار الصورة بالكامل قبل بداية الاختفاء
  else {
    image.style.opacity = 1;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".paze"); // تحديد الجمل
  const textCount = texts.length; // عدد الجمل

  const startScroll = 3755; // بداية التمرير
  const endScroll = 3855;   // نهاية التمرير لكل جملة
  const step = 100;         // المسافة بين كل جملة والجملة التي تليها

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // موضع التمرير الحالي

    texts.forEach((text, index) => {
      const start = startScroll + index * step; // بداية الظهور للجملة الحالية
      const end = endScroll + index * step;     // نهاية الظهور للجملة الحالية

      // الظهور التدريجي
      if (scrollY >= start && scrollY <= end) {
        let opacity = (scrollY - start) / (end - start);
        text.style.opacity = opacity;
      } 
      // الاختفاء التدريجي
      else if (scrollY > end && scrollY <= end + 100) {
        let opacity = 1 - (scrollY - end) / 100;
        text.style.opacity = opacity;
      } 
      // خارج النطاق
      else {
        text.style.opacity = 0;
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // تحديد الفيديو
  const video = document.getElementById("myVideo");

  // التحقق من التمرير
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY; // الموضع الحالي للتمرير

    // تشغيل الفيديو عند الوصول إلى موضع 5600
    if (scrollPos >= 5600 ) {
      if (video.paused) { // تحقق إذا كان الفيديو متوقف
        video.play(); // تشغيل الفيديو
      }
    } else {
      if (!video.paused) { // تحقق إذا كان الفيديو يعمل
        video.pause(); // إيقاف الفيديو
      }
    }
  });
});


window.addEventListener("scroll", () => {
  const l = document.getElementById("llllll"); // تحديد العنصر
  const scrollY = window.scrollY; // قراءة قيمة التمرير

  // نقاط التمرير
  const startShow = 6500; // بداية الظهور
  const endShow = 6800;   // نهاية الظهور
  const startHide = 7500; // بداية الاختفاء
  const endHide = 7800;   // نهاية الاختفاء

  // قيم الحركة الرأسية
  const startTranslate = 500;   // بداية الحركة من الأسفل
  const endTranslate = 0;      // الحركة إلى المركز
  const hideTranslate = -300;  // الحركة للخروج من الشاشة للأعلى

  // إذا كان التمرير داخل نطاق الظهور
  if (scrollY >= startShow && scrollY <= endShow) {
    let progress = (scrollY - startShow) / (endShow - startShow); // نسبة التقدم
    let translateY = startTranslate - (progress * (startTranslate - endTranslate)); // حركة لأعلى تدريجياً
    l.style.opacity = progress; // ضبط الشفافية
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إذا كان التمرير داخل نطاق الاختفاء
  else if (scrollY > startHide && scrollY <= endHide) {
    let progress = (scrollY - startHide) / (endHide - startHide); // نسبة التقدم
    let translateY = endTranslate - (progress * (endTranslate - hideTranslate)); // حركة لأعلى للخروج
    l.style.opacity = 1 - progress; // تقليل الشفافية تدريجياً
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إخفاء العنصر خارج النطاقين مع حركة لأعلى عند الرجوع
  else if (scrollY < startShow) {
    l.style.opacity = 0; // يبقى مخفيًا
    l.style.transform = `translateY(${startTranslate}px)`; // يرجع للنقطة الابتدائية
  } 
  // إذا كان خارج نطاق الاختفاء تمامًا
  else if (scrollY > endHide) {
    l.style.opacity = 0;
    l.style.transform = `translateY(${hideTranslate}px)`; // يختفي للأعلى
  }
});

window.addEventListener("scroll", () => {
  const l = document.getElementById("uuuu"); // تحديد العنصر
  const scrollY = window.scrollY; // قراءة قيمة التمرير

  // نقاط التمرير
  const startShow = 7900; // بداية الظهور
  const endShow = 8100;   // نهاية الظهور
  const startHide = 8900; // بداية الاختفاء
  const endHide = 9200;   // نهاية الاختفاء

  // قيم الحركة الرأسية
  const startTranslate = 500;   // بداية الحركة من الأسفل
  const endTranslate = 0;      // الحركة إلى المركز
  const hideTranslate = -300;  // الحركة للخروج من الشاشة للأعلى

  // إذا كان التمرير داخل نطاق الظهور
  if (scrollY >= startShow && scrollY <= endShow) {
    let progress = (scrollY - startShow) / (endShow - startShow); // نسبة التقدم
    let translateY = startTranslate - (progress * (startTranslate - endTranslate)); // حركة لأعلى تدريجياً
    l.style.opacity = progress; // ضبط الشفافية
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إذا كان التمرير داخل نطاق الاختفاء
  else if (scrollY > startHide && scrollY <= endHide) {
    let progress = (scrollY - startHide) / (endHide - startHide); // نسبة التقدم
    let translateY = endTranslate - (progress * (endTranslate - hideTranslate)); // حركة لأعلى للخروج
    l.style.opacity = 1 - progress; // تقليل الشفافية تدريجياً
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إخفاء العنصر خارج النطاقين مع حركة لأعلى عند الرجوع
  else if (scrollY < startShow) {
    l.style.opacity = 0; // يبقى مخفيًا
    l.style.transform = `translateY(${startTranslate}px)`; // يرجع للنقطة الابتدائية
  } 
  // إذا كان خارج نطاق الاختفاء تمامًا
  else if (scrollY > endHide) {
    l.style.opacity = 0;
    l.style.transform = `translateY(${hideTranslate}px)`; // يختفي للأعلى
  }
});



window.addEventListener("scroll", () => {
  const l = document.getElementById("ioio"); // تحديد العنصر
  const scrollY = window.scrollY; // قراءة قيمة التمرير

  // نقاط التمرير
  const startShow = 9400; // بداية الظهور
  const endShow = 9700;   // نهاية الظهور
  const startHide = 10400; // بداية الاختفاء
  const endHide = 10600;   // نهاية الاختفاء

  // قيم الحركة الرأسية
  const startTranslate = 500;   // بداية الحركة من الأسفل
  const endTranslate = 0;      // الحركة إلى المركز
  const hideTranslate = -300;  // الحركة للخروج من الشاشة للأعلى

  // إذا كان التمرير داخل نطاق الظهور
  if (scrollY >= startShow && scrollY <= endShow) {
    let progress = (scrollY - startShow) / (endShow - startShow); // نسبة التقدم
    let translateY = startTranslate - (progress * (startTranslate - endTranslate)); // حركة لأعلى تدريجياً
    l.style.opacity = progress; // ضبط الشفافية
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إذا كان التمرير داخل نطاق الاختفاء
  else if (scrollY > startHide && scrollY <= endHide) {
    let progress = (scrollY - startHide) / (endHide - startHide); // نسبة التقدم
    let translateY = endTranslate - (progress * (endTranslate - hideTranslate)); // حركة لأعلى للخروج
    l.style.opacity = 1 - progress; // تقليل الشفافية تدريجياً
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إخفاء العنصر خارج النطاقين مع حركة لأعلى عند الرجوع
  else if (scrollY < startShow) {
    l.style.opacity = 0; // يبقى مخفيًا
    l.style.transform = `translateY(${startTranslate}px)`; // يرجع للنقطة الابتدائية
  } 
  // إذا كان خارج نطاق الاختفاء تمامًا
  else if (scrollY > endHide) {
    l.style.opacity = 0;
    l.style.transform = `translateY(${hideTranslate}px)`; // يختفي للأعلى
  }
});


window.addEventListener("scroll", () => {
  // const bg = document.getElementById("background")
  // تحديد الصور
  const img1 = document.getElementById("ppppp"); // الصورة الأولى
  const img2 = document.getElementById("pppp");  // الصورة الثانية
  const img3 = document.getElementById("oopp");  // الصورة الثالثة
  const scrollY = window.scrollY; // قراءة قيمة التمرير

  // نقاط التمرير
  const startTransition1 = 9200;   // بداية الانتقال الأول
  const endTransition1 = 9400;     // نهاية الانتقال الأول
  const startTransition2 = 10700;  // بداية الانتقال الثاني
  const endTransition2 = 10900;    // نهاية الانتقال الثاني
  const startHide3 = 11200;        // بداية اختفاء الصورة الثالثة
  const endHide3 = 12000;          // نهاية اختفاء الصورة الثالثة

  // الانتقال الأول بين img1 و img2
  if (scrollY >= startTransition1 && scrollY <= endTransition1) {
    let progress = (scrollY - startTransition1) / (endTransition1 - startTransition1);
    img1.style.opacity = 1 - progress;
    img2.style.opacity = progress;
    img3.style.opacity = 0;
  } 
  else if (scrollY < startTransition1) {
    img1.style.opacity = 1;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
  } 
  else if (scrollY > endTransition1 && scrollY < startTransition2) {
    img1.style.opacity = 0;
    img2.style.opacity = 1;
    img3.style.opacity = 0;
  } 
  // الانتقال الثاني بين img2 و img3
  else if (scrollY >= startTransition2 && scrollY <= endTransition2) {
    let progress = (scrollY - startTransition2) / (endTransition2 - startTransition2);
    img2.style.opacity = 1 - progress;
    img3.style.opacity = progress;
    img1.style.opacity = 0;
  } 
  else if (scrollY > endTransition2 && scrollY < startHide3) {
    img2.style.opacity = 0;
    img3.style.opacity = 1;
    img1.style.opacity = 0;
  } 
  // اختفاء تدريجي للصورة الثالثة بعد 11200
  else if (scrollY >= startHide3 && scrollY <= endHide3) {
    let progress = (scrollY - startHide3) / (endHide3 - startHide3);
    img3.style.opacity = 1 - progress; // تقليل الشفافية تدريجيًا
    img3.style.transform = `translateY(${progress * 50}px)`; // حركة خفيفة لأعلى
    // bg.style.opacity = 1 - progress; // اختفاء الخلفية تدريجيًا
    // bg.style.transform = `translateY(${progress * 50}px)`; // حركة متزامنة مع الصورة
    
  } 
  else if (scrollY > endHide3) {
    img3.style.opacity = 0;
    img3.style.transform = "translateY(50px)"; // تثبيت مكان الاختفاء
    // bg.style.opacity = 0; // إخفاء الخلفية تمامًا
    // bg.style.transform = "translateY(50px)";
  }
});

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY; // قراءة قيمة التمرير
//   const startHide3 = 11200;        // بداية اختفاء الصورة الثالثة
//   const endHide3 = 12000;          // نهاية اختفاء الصورة الثالثة

//   const body = document.body;  // الوصول إلى العنصر body

//   // التحقق مما إذا كانت التمريرة بين startHide3 و endHide3
//   if (scrollY >= startHide3 && scrollY <= endHide3) {
//     let progress = (scrollY - startHide3) / (endHide3 - startHide3); // حساب التقدم

//     // تغيير الخلفية تدريجيًا من صورة إلى لون (أو صورة أخرى)
//     body.style.backgroundImage = `url('044.png')`;  // خلفية الصورة الأولى
//     body.style.backgroundSize = "contain";
//     body.style.backgroundPosition = "center";

//     // اختفاء الصورة تدريجيًا من خلال تغيير الشفافية
//     body.style.opacity = 1 - progress;  // تقليل الشفافية تدريجيًا

//     // يمكنك تغيير الخلفية إلى لون ثابت عند النهاية (اختياري)
//     if (scrollY > endHide3) {
//       body.style.backgroundColor = "black"   // عند الوصول لنهاية الاختفاء
//       body.style.opacity = 0;  // اختفاء الخلفية تمامًا
//     }
//   } else if (scrollY < startHide3) {
//     // التأكد من أن الخلفية تكون واضحة قبل startHide3
//     body.style.backgroundImage = "url('044.png')";
//     body.style.opacity = 1;
//   }else{
//     body.style.backgroundColor = "black" 
//   }
// });

// const imageDiv = document.getElementById("positionAbsolute");

// window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY; // للحصول على قيمة التمرير

//     // هنا يمكنك تغيير قيم المكان حسب التمرير أو بطريقة أخرى
//     // على سبيل المثال، إذا أردت تغيير المكان بناءً على التمرير:
//     const newTop = 1000 + scrollY * 0.1; // تعديل قيمة `top` بناءً على التمرير
//     imageDiv.style.top = `${newTop}px`;

//     // يمكن أيضًا التحكم في الشفافية أو الخصائص الأخرى بناءً على التمرير
//     const startHide = 10200;
//     const endHide = 12000;

//     if (scrollY >= startHide && scrollY <= endHide) {
//         let progress = (scrollY - startHide) / (endHide - startHide);
//         imageDiv.style.opacity = 1 - progress; // لجعل الصورة تختفي تدريجيًا
//     } else if (scrollY < startHide) {
//         imageDiv.style.opacity = 1; // الصورة تكون مرئية بالكامل قبل التمرير
//     } else {
//         imageDiv.style.opacity = 0; // الصورة تختفي تمامًا بعد التمرير
//     }
// });
// بتاع صور مكررة زي فيلم

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".kokoko");
  const imageCount = images.length; // عدد الصور
  const startScroll = 13927; // بداية التأثير
  const endScroll = 13927 + 14500; // نهاية التأثير بعد 5000px (يمكن تعديلها)
  const scrollRange = endScroll - startScroll; // المسافة الكلية للتبديل بين الصور

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (scrollPos < startScroll) {
      // قبل بداية التأثير، تظهر الصورة الأولى فقط
      images.forEach((img, i) => {
        img.classList.toggle("active", i === 0);
      });
    } else if (scrollPos > endScroll) {
      // بعد نهاية التأثير، تظهر الصورة الأخيرة فقط
      images.forEach((img, i) => {
        img.classList.toggle("active", i === imageCount - 1);
      });
    } else {
      // أثناء التمرير داخل النطاق المحدد
      const progress = (scrollPos - startScroll) / scrollRange;
      const index = Math.min(
        Math.floor(progress * imageCount),
        imageCount - 1
      );

      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }
  });
});

// // تحديد الصورة
// const image = document.getElementById('ioioioio'); // استبدل 'myImage' بمعرف الصورة

// // إضافة مستمع لحدث التمرير
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;

//   // إذا كان موضع التمرير أكبر من أو يساوي 13900
//   if (scrollPosition >= 13900) {
//     image.style.position = 'fixed';
//     // يمكنك إضافة أي خصائص CSS أخرى هنا، مثل top، left، إلخ.
//     image.style.top = '0'; // مثلاً لتثبيت الصورة في أعلى الصفحة
//   }else {
//     image.style.position = 'static'; // أو أي قيمة أخرى كانت قبل التثبيت
//   }
// });
// // تحديد الصورة
// const image = document.getElementById('ioioioio');

// // إضافة مستمع لحدث التمرير
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;

//   // إذا كان موضع التمرير أكبر من أو يساوي 13900 وأقل من 28446
//   if (scrollPosition >= 13900 && scrollPosition < 28446) {
//     image.style.position = 'fixed';
//     image.style.top = '0';
//   } else {
//     // إخفاء الصورة إذا كان موضع التمرير أكبر من أو يساوي 28446
//     if (scrollPosition >= 28446) {
//       image.style.display = 'none';
//     } else {
//       image.style.position = 'static';
//       image.style.display = 'block'; // لإظهار الصورة مرة أخرى عند التمرير لأعلى
//     }
//   }
// });
// تحديد الصورة
// const image = document.getElementById('ioioioio');

// // متغير لتتبع الاتجاه (أعلى: true، أسفل: false)
// let isScrollingUp = false;

// // إضافة مستمع لحدث التمرير
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;

//   // تحديد اتجاه التمرير
//   if (window.scrollY > this.previousPosition) {
//     isScrollingUp = false;
//   } else {
//     isScrollingUp = true;
//   }
//   this.previousPosition = window.scrollY;

//   // تطبيق التأثيرات بناءً على الاتجاه وموضع التمرير
//   if (isScrollingUp) {
//     // عند التمرير لأعلى
//     if (scrollPosition >= 28446) {
//       image.style.display = 'block';
//     } else if (scrollPosition >= 13300) {
//       image.style.position = 'fixed';
//       image.style.top = '0';
//     } else {
//       image.style.position = 'static';
//     }
//   } else {
//     // عند التمرير لأسفل (التأثير الأصلي)
//     if (scrollPosition >= 13300 && scrollPosition < 28446) {
//       image.style.position = 'fixed';
//       image.style.top = '0';
//     } else {
//       if (scrollPosition >= 28446) {
//         image.style.display = 'none';
//       } else {
//         image.style.position = 'static';
//         image.style.display = 'block';
//       }
//     }
//   }
// });
const image = document.getElementById("ioioioio");

// متغير لتتبع الاتجاه (أعلى: true، أسفل: false)
let isScrollingUp = false; 
let previousPosition = window.scrollY; 

// إضافة مستمع لحدث التمرير
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // تحديد اتجاه التمرير
  if (scrollPosition > previousPosition) {
    isScrollingUp = false; 
  } else {
    isScrollingUp = true; 
  }
  previousPosition = scrollPosition;

  // تطبيق التأثيرات بناءً على الاتجاه وموضع التمرير
  if (isScrollingUp) {
    // عند التمرير لأعلى
    if (scrollPosition >= 28446) {
      image.style.display = 'block';
    } else if (scrollPosition >= 13900) {
      image.style.position = 'sticky'; 
      image.style.top = '0';
    } else {
      image.style.position = 'static';
    }
  } else {
    // عند التمرير لأسفل
    if (scrollPosition >= 13900 && scrollPosition < 28446) {
      image.style.position = 'sticky'; 
      image.style.top = '0';
    } else {
      if (scrollPosition >= 28446) {
        image.style.display = 'none';
      } else {
        image.style.position = 'static';
        image.style.display = 'block';
      }
    }
  }
});
window.addEventListener("scroll", () => {
  const l = document.getElementById("popopo"); // تحديد العنصر
  const scrollY = window.scrollY; // قراءة قيمة التمرير

  // نقاط التمرير
  const startShow = 13300; // بداية الظهور
  const endShow = 13400;   // نهاية الظهور
  const startHide = 14000; // بداية الاختفاء
  const endHide = 14300;   // نهاية الاختفاء

  // قيم الحركة الرأسية
  const startTranslate = 500;   // بداية الحركة من الأسفل
  const endTranslate = 0;      // الحركة إلى المركز
  const hideTranslate = -300;  // الحركة للخروج من الشاشة للأعلى

  // إذا كان التمرير داخل نطاق الظهور
  if (scrollY >= startShow && scrollY <= endShow) {
    let progress = (scrollY - startShow) / (endShow - startShow); // نسبة التقدم
    let translateY = startTranslate - (progress * (startTranslate - endTranslate)); // حركة لأعلى تدريجياً
    l.style.opacity = progress; // ضبط الشفافية
    l.style.position = "fixed"
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إذا كان التمرير داخل نطاق الاختفاء
  else if (scrollY > startHide && scrollY <= endHide) {
    let progress = (scrollY - startHide) / (endHide - startHide); // نسبة التقدم
    let translateY = endTranslate - (progress * (endTranslate - hideTranslate)); // حركة لأعلى للخروج
    l.style.opacity = 1 - progress; // تقليل الشفافية تدريجياً
    l.style.position = "fixed"
    l.style.transform = `translateY(${translateY}px)`; // حركة رأسية لأعلى
  } 
  // إخفاء العنصر خارج النطاقين مع حركة لأعلى عند الرجوع
  else if (scrollY < startShow) {
    l.style.opacity = 0; // يبقى مخفيًا
   l.style.display = "none"
    l.style.transform = `translateY(${startTranslate}px)`; // يرجع للنقطة الابتدائية
  } 
  // إذا كان خارج نطاق الاختفاء تمامًا
  else if (scrollY > endHide) {
    l.style.opacity = 0;
    l.style.display = "none"
    l.style.transform = `translateY(${hideTranslate}px)`; // يختفي للأعلى
  }
});