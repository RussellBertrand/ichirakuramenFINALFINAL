(function () {
  "use strict";

  /* ============================================================
     DATA
     (descId = Indonesian description, added for the language toggle)
     ============================================================ */
  var MENU = [
    {
      id: "ramen-special",
      category: "ramen",
      name: "Special Ramen",
      price: 60000,
      image: "images/ramen_special.jpg",
      desc: "Special Ramen brings a richer broth and a fuller lineup of toppings. Perfect if you want a hearty bowl packed with layered flavor.",
      descId: "Special Ramen hadir dengan kuah yang lebih kaya dan topping yang lebih lengkap. Cocok untuk kamu yang ingin semangkuk ramen mengenyangkan dengan rasa berlapis."
    },
    {
      id: "ramen-shoyu",
      category: "ramen",
      name: "Shoyu Ramen",
      price: 60000,
      image: "images/shoyu_ramen.jpg",
      desc: "Shoyu Ramen is built on a soy-sauce based broth with that classic, savory Japanese flavor, finished with noodles and handpicked toppings for any time of day.",
      descId: "Shoyu Ramen berbahan dasar kuah kecap asin dengan cita rasa gurih khas Jepang, dilengkapi mi dan topping pilihan yang pas dinikmati kapan saja."
    },
    {
      id: "ramen-spicy",
      category: "ramen",
      name: "Spicy Ramen",
      price: 60000,
      image: "images/spicy_ramen.jpg",
      desc: "Spicy Ramen delivers a bold, appetizing kick of heat. Great for anyone who likes their savory broth with a stronger spicy edge.",
      descId: "Spicy Ramen menghadirkan sensasi pedas yang berani dan menggugah selera. Cocok untuk kamu yang suka kuah gurih dengan sentuhan pedas lebih kuat."
    },
    {
      id: "ramen-gyoza",
      category: "ramen",
      name: "Easy Gyoza Ramen",
      price: 60000,
      image: "images/easy_gyoza_ramen.jpg",
      desc: "Easy Gyoza Ramen brings together tender ramen noodles and juicy gyoza in one comforting bowl. Perfect if you want your ramen with a savory, filling twist.",
      descId: "Easy Gyoza Ramen memadukan mi ramen yang lembut dengan gyoza juicy dalam satu mangkuk yang hangat. Cocok untuk kamu yang ingin ramen dengan sentuhan gurih dan mengenyangkan."
    },
    {
      id: "drink-lemon",
      category: "drink",
      name: "Lemon Tea",
      price: 7000,
      image: "images/lemon_tea.jpg",
      desc: "Lemon Tea is a refreshing iced tea blended with the tangy sweetness of lemon — a great companion to your meal and a burst of freshness in every sip.",
      descId: "Lemon Tea adalah es teh segar dengan manis asam lemon, teman yang pas untuk makananmu dan memberi kesegaran di setiap tegukan."
    },
    {
      id: "drink-green",
      category: "drink",
      name: "Green Tea",
      price: 7000,
      image: "images/green_tea.jpg",
      desc: "Green Tea offers a light, distinctly clean flavor. Great alongside any ramen for a well-balanced finish.",
      descId: "Green Tea punya rasa ringan yang bersih dan khas. Cocok menemani ramen apa pun untuk penutup yang seimbang."
    }
  ];

  /* ============================================================
     TRANSLATIONS (#4)
     Keys are referenced from index.html via data-i18n,
     data-i18n-placeholder and data-i18n-aria.
     Don't use double quotes inside strings (some go into attributes).
     ============================================================ */
  var I18N = {
    en: {
      aria_lang: "Language",
      aria_cart: "Open cart",
      aria_close: "Close",
      track_order: "Track Order",
      cart: "Cart",

      menu_title: "Our Menu",
      menu_intro: "Steaming bowls of ramen made with signature recipes, paired with refreshing tea to go with every sip.",
      search_placeholder: "Search menu…",
      search_label: "Search menu",
      categories_label: "Menu categories",
      cat_all: "All",
      cat_ramen: "Ramen",
      cat_drinks: "Drinks",
      col_ramen: "Ramen",
      col_ramen_sub: "Warm broth, loaded with toppings",
      col_drinks: "Drinks",
      col_drinks_sub: "Refreshing, sweet, just right",
      empty_title: "No menu found",
      empty_desc: "Try a different keyword or category.",

      add: "Add",
      added: "Added ✓",
      each: "each",
      remove: "Remove",
      qty_dec: "Decrease quantity of",
      qty_inc: "Increase quantity of",
      note_placeholder: "Add a note, e.g. extra spicy",
      note_label: "Note for",
      note_prefix: "Note",

      cart_empty_title: "Your cart is empty.",
      cart_empty_desc: "Pick your favorite ramen or drink to get started.",
      subtotal: "Subtotal",
      checkout: "Checkout",

      summary_title: "Order Summary",
      total_payment: "Total Payment",
      pay_method: "Payment Method",
      pay_bank: "Bank Transfer",
      pay_ewallet: "E-Wallet",
      pay_account_bank: "Account Number",
      pay_account_bank_ph: "e.g. 1234567890",
      pay_account_ewallet: "Phone Number",
      pay_account_ewallet_ph: "e.g. 081234567890",
      pay_pin: "Password / PIN",
      confirm_order: "Confirm Order",
      err_required: "This field is required.",
      err_bank: "Enter a valid account number (8–16 digits).",
      err_ewallet: "Enter a valid phone number (e.g. 081234567890).",
      err_pin_short: "Password / PIN must be at least 4 characters.",

      success_title: "Order Confirmed!",
      success_pre: "Order number",
      success_post: "has been received. Thanks for ordering from Ichiraku Ramen.",
      done: "Done",

      track_title: "Track Order",
      track_label: "Order number",
      track_check: "Check Status",
      err_track_required: "Please enter your order number.",
      err_track_format: "Invalid format. Example: #IR-1234",
      status_0: "Order received",
      status_1: "Your order is being cooked",
      status_2: "Your order is on the way",
      status_3: "Order completed",
      step_0: "Received",
      step_1: "Cooking",
      step_2: "On the way",
      step_3: "Done",

      footer_loc: "East Jakarta, Indonesia",
      footer_note: "Open daily · 11:00 AM – 9:00 PM · Dine-in & Takeaway",
      footer_copy: "© 2026 Ichiraku Ramen. All rights reserved."
    },
    id: {
      aria_lang: "Bahasa",
      aria_cart: "Buka keranjang",
      aria_close: "Tutup",
      track_order: "Lacak Pesanan",
      cart: "Keranjang",

      menu_title: "Menu Kami",
      menu_intro: "Semangkuk ramen hangat dengan resep andalan, dipadukan dengan teh segar di setiap tegukan.",
      search_placeholder: "Cari menu…",
      search_label: "Cari menu",
      categories_label: "Kategori menu",
      cat_all: "Semua",
      cat_ramen: "Ramen",
      cat_drinks: "Minuman",
      col_ramen: "Ramen",
      col_ramen_sub: "Kuah hangat, penuh topping",
      col_drinks: "Minuman",
      col_drinks_sub: "Segar, manis, pas banget",
      empty_title: "Menu tidak ditemukan",
      empty_desc: "Coba kata kunci atau kategori lain.",

      add: "Tambah",
      added: "Ditambahkan ✓",
      each: "per porsi",
      remove: "Hapus",
      qty_dec: "Kurangi jumlah",
      qty_inc: "Tambah jumlah",
      note_placeholder: "Catatan, mis. tambah level cabe",
      note_label: "Catatan untuk",
      note_prefix: "Catatan",

      cart_empty_title: "Keranjangmu masih kosong.",
      cart_empty_desc: "Pilih ramen atau minuman favoritmu untuk mulai memesan.",
      subtotal: "Subtotal",
      checkout: "Checkout",

      summary_title: "Ringkasan Pesanan",
      total_payment: "Total Pembayaran",
      pay_method: "Metode Pembayaran",
      pay_bank: "Transfer Bank",
      pay_ewallet: "E-Wallet",
      pay_account_bank: "Nomor Rekening",
      pay_account_bank_ph: "mis. 1234567890",
      pay_account_ewallet: "Nomor HP",
      pay_account_ewallet_ph: "mis. 081234567890",
      pay_pin: "Password / PIN",
      confirm_order: "Konfirmasi Pesanan",
      err_required: "Kolom ini wajib diisi.",
      err_bank: "Masukkan nomor rekening yang valid (8–16 digit).",
      err_ewallet: "Masukkan nomor HP yang valid (mis. 081234567890).",
      err_pin_short: "Password / PIN minimal 4 karakter.",

      success_title: "Pesanan Dikonfirmasi!",
      success_pre: "Pesanan dengan nomor",
      success_post: "sudah kami terima. Terima kasih sudah memesan di Ichiraku Ramen.",
      done: "Selesai",

      track_title: "Lacak Pesanan",
      track_label: "Nomor pesanan",
      track_check: "Cek Status",
      err_track_required: "Masukkan nomor pesananmu.",
      err_track_format: "Format tidak valid. Contoh: #IR-1234",
      status_0: "Pesanan diterima",
      status_1: "Pesanan sedang dimasak",
      status_2: "Pesanan sedang diantar",
      status_3: "Pesanan selesai",
      step_0: "Diterima",
      step_1: "Dimasak",
      step_2: "Diantar",
      step_3: "Selesai",

      footer_loc: "Jakarta Timur, Indonesia",
      footer_note: "Buka setiap hari · 11.00 – 21.00 · Makan di tempat & Bawa pulang",
      footer_copy: "© 2026 Ichiraku Ramen. Hak cipta dilindungi."
    }
  };

  /* ============================================================
     STATE
     ============================================================ */
  var currentLang = "en";
  var activeCategory = "all";   // "all" | "ramen" | "drink"
  var searchQuery = "";

  var cart = {};          // { itemId: { qty: number, note: string } }   (#6: note stored here)
  var pendingQty = {};    // per-card selector state before "add to cart"
  var placedOrders = {};  // { "#IR-1234": timestamp } — orders confirmed in this session
  var lastTrackNo = "";   // last order number checked in Track Order
  var drinksCarousel = null;

  /* ============================================================
     HELPERS
     ============================================================ */
  function $(id) { return document.getElementById(id); }

  function t(key) {
    var dict = I18N[currentLang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  }

  function formatRupiah(n) {
    return "Rp " + n.toLocaleString("id-ID");
  }

  function findItem(id) {
    for (var i = 0; i < MENU.length; i++) {
      if (MENU[i].id === id) return MENU[i];
    }
    return null;
  }

  /* ============================================================
     LANGUAGE (#4)
     ============================================================ */
  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === currentLang ? "true" : "false");
    });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    try { localStorage.setItem("ichiraku-lang", lang); } catch (e) { /* storage may be blocked */ }

    applyTranslations();
    renderMenu();      // card descriptions + button labels
    renderCart();      // "each", "Remove", note placeholder
    renderSummary();   // note prefix
    renderTrackResult();
  }

  function loadSavedLanguage() {
    try {
      var saved = localStorage.getItem("ichiraku-lang");
      if (saved && I18N[saved]) currentLang = saved;
    } catch (e) { /* ignore */ }
  }

  /* ============================================================
     MENU: FILTER (#2 search + #7 category) + RENDER
     ============================================================ */
  function getFilteredMenu() {
    var q = searchQuery.trim().toLowerCase();
    return MENU.filter(function (item) {
      var categoryOk = activeCategory === "all" || item.category === activeCategory;
      var nameOk = !q || item.name.toLowerCase().indexOf(q) !== -1;
      return categoryOk && nameOk;
    });
  }

  function buildMenuCard(item) {
    if (!pendingQty[item.id]) pendingQty[item.id] = 1;
    var desc = (currentLang === "id" && item.descId) ? item.descId : item.desc;

    var card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML =
      '<div class="menu-card-media">' +
        '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy">' +
        '<span class="menu-card-price">' + formatRupiah(item.price) + "</span>" +
      "</div>" +
      '<div class="menu-card-body">' +
        '<h3 class="menu-card-name">' + item.name + "</h3>" +
        '<p class="menu-card-desc">' + desc + "</p>" +
        '<div class="menu-card-controls">' +
          '<div class="qty-stepper" data-id="' + item.id + '">' +
            '<button type="button" class="qty-btn" data-action="dec" aria-label="' + t("qty_dec") + " " + item.name + '">−</button>' +
            '<span class="qty-value" data-qty>' + pendingQty[item.id] + "</span>" +
            '<button type="button" class="qty-btn" data-action="inc" aria-label="' + t("qty_inc") + " " + item.name + '">+</button>' +
          "</div>" +
          '<button type="button" class="add-btn" data-add="' + item.id + '">' + t("add") + "</button>" +
        "</div>" +
      "</div>";
    return card;
  }

  function renderMenu() {
    var ramenGrid = $("ramen-grid");
    var drinksTrack = $("drinks-track");
    var ramenCol = $("ramen-column");
    var drinksCol = $("drinks-column");
    var columns = $("menu-columns");

    ramenGrid.innerHTML = "";
    drinksTrack.innerHTML = "";

    var items = getFilteredMenu();
    var ramenCount = 0;
    var drinkCount = 0;

    items.forEach(function (item) {
      var card = buildMenuCard(item);
      if (item.category === "ramen") {
        ramenGrid.appendChild(card);
        ramenCount++;
      } else {
        drinksTrack.appendChild(card);
        drinkCount++;
      }
    });

    // hide a column that has nothing to show; centre the remaining one
    ramenCol.hidden = ramenCount === 0;
    drinksCol.hidden = drinkCount === 0;
    columns.classList.toggle("is-single", (ramenCount === 0) !== (drinkCount === 0));
    $("menu-empty").hidden = items.length > 0;

    bindCardControls();
    if (drinksCarousel) drinksCarousel.refresh();
  }

  function bindCardControls() {
    document.querySelectorAll(".qty-stepper[data-id]").forEach(function (stepper) {
      var id = stepper.getAttribute("data-id");
      var qtyEl = stepper.querySelector("[data-qty]");
      stepper.querySelectorAll(".qty-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var action = btn.getAttribute("data-action");
          var val = pendingQty[id];
          if (action === "inc") val = Math.min(val + 1, 20);
          else val = Math.max(val - 1, 1);
          pendingQty[id] = val;
          qtyEl.textContent = val;
        });
      });
    });

    document.querySelectorAll("[data-add]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-add");
        addToCart(id, pendingQty[id]);
        pendingQty[id] = 1;
        var stepper = document.querySelector('.qty-stepper[data-id="' + id + '"] [data-qty]');
        if (stepper) stepper.textContent = "1";

        btn.textContent = t("added");
        btn.classList.add("is-added");
        setTimeout(function () {
          btn.textContent = t("add");
          btn.classList.remove("is-added");
        }, 1100);
      });
    });
  }

  /* ============================================================
     CART LOGIC
     cart[id] = { qty, note }   (#6)
     ============================================================ */
  function addToCart(id, qty) {
    if (!cart[id]) cart[id] = { qty: 0, note: "" };
    cart[id].qty += qty;
    renderCart();
    openDrawer();
  }

  function updateQty(id, delta) {
    if (!cart[id]) return;
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
    renderCart();
  }

  function removeFromCart(id) {
    delete cart[id];
    renderCart(); // renderCart() also calls updateCartBadge() (#5)
  }

  function cartCount() {
    var total = 0;
    for (var id in cart) total += cart[id].qty;
    return total;
  }

  function cartSubtotal() {
    var total = 0;
    for (var id in cart) {
      var item = findItem(id);
      if (item) total += item.price * cart[id].qty;
    }
    return total;
  }

  /* #5 — badge in the header: always in sync, hidden when the cart is empty */
  function updateCartBadge() {
    var badge = $("cart-badge");
    var count = cartCount();
    if (count > 0) {
      badge.textContent = count;
      badge.hidden = false;
    } else {
      badge.textContent = "0";
      badge.hidden = true;
    }
  }

  function renderCart() {
    var container = $("cart-items");
    var emptyState = $("cart-empty");
    var foot = $("cart-foot");

    container.querySelectorAll(".cart-item").forEach(function (el) { el.remove(); });

    var ids = Object.keys(cart);
    if (ids.length === 0) {
      emptyState.hidden = false;
      foot.hidden = true;
    } else {
      emptyState.hidden = true;
      foot.hidden = false;

      ids.forEach(function (id) {
        var item = findItem(id);
        if (!item) return;
        var entry = cart[id];
        var row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML =
          '<div class="cart-item-thumb"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
          '<div class="cart-item-info">' +
            '<p class="cart-item-name">' + item.name + "</p>" +
            '<p class="cart-item-price">' + formatRupiah(item.price) + " " + t("each") + "</p>" +
            '<div class="cart-item-row">' +
              '<div class="qty-stepper" data-cart-id="' + id + '">' +
                '<button type="button" class="qty-btn" data-cart-action="dec" aria-label="' + t("qty_dec") + " " + item.name + '">−</button>' +
                '<span class="qty-value">' + entry.qty + "</span>" +
                '<button type="button" class="qty-btn" data-cart-action="inc" aria-label="' + t("qty_inc") + " " + item.name + '">+</button>' +
              "</div>" +
              '<button type="button" class="cart-item-remove" data-remove="' + id + '">' + t("remove") + "</button>" +
            "</div>" +
            '<input type="text" class="cart-item-note" data-note="' + id + '" maxlength="80" ' +
              'placeholder="' + t("note_placeholder") + '" aria-label="' + t("note_label") + " " + item.name + '">' +
          "</div>";
        container.appendChild(row);

        // value set via DOM (not innerHTML) so user text can never inject markup
        var noteInput = row.querySelector(".cart-item-note");
        noteInput.value = entry.note || "";
        noteInput.addEventListener("input", function () {
          if (cart[id]) cart[id].note = noteInput.value; // no re-render => focus is kept while typing
        });
      });

      container.querySelectorAll("[data-cart-id]").forEach(function (stepper) {
        var id = stepper.getAttribute("data-cart-id");
        stepper.querySelectorAll(".qty-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var action = btn.getAttribute("data-cart-action");
            updateQty(id, action === "inc" ? 1 : -1);
          });
        });
      });

      container.querySelectorAll("[data-remove]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          removeFromCart(btn.getAttribute("data-remove"));
        });
      });
    }

    $("cart-subtotal").textContent = formatRupiah(cartSubtotal());
    updateCartBadge();
  }

  /* ============================================================
     DRAWER + MODAL CONTROLS
     ============================================================ */
  var drawer = $("cart-drawer");
  var drawerOverlay = $("drawer-overlay");
  var modal = $("checkout-modal");
  var modalOverlay = $("modal-overlay");
  var trackModal = $("track-modal");
  var trackOverlay = $("track-overlay");

  function openDrawer() {
    drawer.classList.add("is-open");
    drawerOverlay.classList.add("is-open");
  }
  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawerOverlay.classList.remove("is-open");
  }

  /* #1 — the summary step and the success step are always toggled together,
     so they can never be visible at the same time. */
  function showCheckoutStep(step) {
    $("step-summary").hidden = step !== "summary";
    $("step-success").hidden = step !== "success";
  }
  function openModal() {
    showCheckoutStep("summary");
    modal.classList.add("is-open");
    modalOverlay.classList.add("is-open");
  }
  function closeModal() {
    modal.classList.remove("is-open");
    modalOverlay.classList.remove("is-open");
  }

  $("cart-trigger").addEventListener("click", openDrawer);
  $("cart-close").addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);

  $("modal-close").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  $("checkout-btn").addEventListener("click", function () {
    if (cartCount() === 0) return;
    renderSummary();
    resetPaymentForm();
    closeDrawer();
    openModal();
  });

  function renderSummary() {
    var list = $("summary-list");
    list.innerHTML = "";
    Object.keys(cart).forEach(function (id) {
      var item = findItem(id);
      if (!item) return;
      var entry = cart[id];

      var li = document.createElement("li");
      var left = document.createElement("span");
      left.textContent = item.name + " × " + entry.qty;

      // #6 — show the special note (textContent => safe for any user input)
      var note = (entry.note || "").trim();
      if (note) {
        var noteEl = document.createElement("small");
        noteEl.className = "summary-note";
        noteEl.textContent = t("note_prefix") + ": " + note;
        left.appendChild(noteEl);
      }

      var price = document.createElement("strong");
      price.textContent = formatRupiah(item.price * entry.qty);

      li.appendChild(left);
      li.appendChild(price);
      list.appendChild(li);
    });
    $("summary-total").textContent = formatRupiah(cartSubtotal());
  }

  /* ============================================================
     PAYMENT FORM + CONFIRM ORDER (#3)
     ============================================================ */
  var paymentForm = $("payment-form");
  var accountInput = $("pay-account");
  var pinInput = $("pay-pin");
  var accountError = $("pay-account-error");
  var pinError = $("pay-pin-error");

  function setFieldError(input, errorEl, key) {
    if (key) {
      input.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      errorEl.setAttribute("data-i18n", key); // keeps the message translated on language switch
      errorEl.textContent = t(key);
      errorEl.hidden = false;
    } else {
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      errorEl.removeAttribute("data-i18n");
      errorEl.textContent = "";
      errorEl.hidden = true;
    }
  }

  function getPaymentMethod() {
    var checked = document.querySelector('input[name="pay-method"]:checked');
    return checked ? checked.value : "bank";
  }

  function updatePaymentLabels() {
    var isBank = getPaymentMethod() === "bank";
    $("pay-account-label").setAttribute("data-i18n", isBank ? "pay_account_bank" : "pay_account_ewallet");
    accountInput.setAttribute("data-i18n-placeholder", isBank ? "pay_account_bank_ph" : "pay_account_ewallet_ph");
    applyTranslations();
  }

  function resetPaymentForm() {
    paymentForm.reset();
    setFieldError(accountInput, accountError, null);
    setFieldError(pinInput, pinError, null);
    updatePaymentLabels();
  }

  function validatePayment() {
    var method = getPaymentMethod();
    var account = accountInput.value.trim();
    var pin = pinInput.value;
    var firstInvalid = null;

    var accountKey = null;
    if (!account) accountKey = "err_required";
    else if (method === "bank" && !/^\d{8,16}$/.test(account)) accountKey = "err_bank";
    else if (method === "ewallet" && !/^(0|62)8\d{7,11}$/.test(account)) accountKey = "err_ewallet";
    setFieldError(accountInput, accountError, accountKey);
    if (accountKey) firstInvalid = accountInput;

    var pinKey = null;
    if (!pin) pinKey = "err_required";
    else if (pin.length < 4) pinKey = "err_pin_short";
    setFieldError(pinInput, pinError, pinKey);
    if (pinKey && !firstInvalid) firstInvalid = pinInput;

    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  document.querySelectorAll('input[name="pay-method"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
      setFieldError(accountInput, accountError, null);
      updatePaymentLabels();
    });
  });

  accountInput.addEventListener("input", function () {
    accountInput.value = accountInput.value.replace(/\D/g, ""); // digits only
    if (accountInput.classList.contains("is-invalid")) setFieldError(accountInput, accountError, null);
  });
  pinInput.addEventListener("input", function () {
    if (pinInput.classList.contains("is-invalid")) setFieldError(pinInput, pinError, null);
  });

  function generateOrderNo() {
    var no;
    do {
      no = "#IR-" + Math.floor(1000 + Math.random() * 9000);
    } while (placedOrders[no]);
    return no;
  }

  // Confirm Order = submit of the payment form. Success is only shown if validation passes.
  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (cartCount() === 0) return;
    if (!validatePayment()) return;

    var orderNo = generateOrderNo();
    placedOrders[orderNo] = Date.now();
    $("order-number").textContent = orderNo;

    // Never keep the PIN around after the (dummy) payment
    paymentForm.reset();

    // The order is placed now: empty the cart immediately so it can't be re-ordered
    // by closing the modal with X / overlay / Esc instead of "Done".
    cart = {};
    renderCart();

    showCheckoutStep("success");
  });

  $("success-close-btn").addEventListener("click", closeModal);

  /* ============================================================
     TRACK ORDER (#8) — dummy logic
     ============================================================ */
  function openTrackModal() {
    closeDrawer();
    lastTrackNo = "";
    $("track-input").value = "";
    setFieldError($("track-input"), $("track-error"), null);
    $("track-result").hidden = true;
    trackModal.classList.add("is-open");
    trackOverlay.classList.add("is-open");
    $("track-input").focus();
  }
  function closeTrackModal() {
    trackModal.classList.remove("is-open");
    trackOverlay.classList.remove("is-open");
  }

  // 0 = received, 1 = cooking, 2 = on the way, 3 = completed
  function getStatusIndex(orderNo) {
    var placedAt = placedOrders[orderNo];
    if (placedAt) { // an order placed in this session "progresses" over time
      var sec = (Date.now() - placedAt) / 1000;
      return sec < 20 ? 0 : sec < 60 ? 1 : sec < 120 ? 2 : 3;
    }
    var digits = orderNo.replace(/\D/g, ""); // any other number: fixed fake status
    var sum = 0;
    for (var i = 0; i < digits.length; i++) sum += parseInt(digits[i], 10);
    return sum % 4;
  }

  function renderTrackResult() {
    var result = $("track-result");
    if (!lastTrackNo) { result.hidden = true; return; }

    var idx = getStatusIndex(lastTrackNo);
    $("track-order-no").textContent = lastTrackNo;
    $("track-status").textContent = t("status_" + idx);

    var steps = $("track-steps");
    steps.innerHTML = "";
    for (var i = 0; i < 4; i++) {
      var li = document.createElement("li");
      if (i < idx) li.className = "is-done";
      else if (i === idx) li.className = "is-current";
      li.textContent = t("step_" + i);
      steps.appendChild(li);
    }
    result.hidden = false;
  }

  $("track-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var input = $("track-input");
    var err = $("track-error");
    var raw = input.value.trim();

    if (!raw) {
      lastTrackNo = "";
      setFieldError(input, err, "err_track_required");
      renderTrackResult();
      return;
    }
    var match = /^#?\s*IR-?\s*(\d{4})$/i.exec(raw);
    if (!match) {
      lastTrackNo = "";
      setFieldError(input, err, "err_track_format");
      renderTrackResult();
      return;
    }

    setFieldError(input, err, null);
    lastTrackNo = "#IR-" + match[1];
    input.value = lastTrackNo;
    renderTrackResult();
  });
  $("track-input").addEventListener("input", function () {
    if (this.classList.contains("is-invalid")) setFieldError(this, $("track-error"), null);
  });

  $("track-trigger").addEventListener("click", openTrackModal);
  $("track-footer-btn").addEventListener("click", openTrackModal);
  $("track-close").addEventListener("click", closeTrackModal);
  trackOverlay.addEventListener("click", closeTrackModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeDrawer();
      closeModal();
      closeTrackModal();
    }
  });

  /* ============================================================
     SEARCH (#2), CATEGORY (#7), LANGUAGE (#4) — event wiring
     ============================================================ */
  $("menu-search").addEventListener("input", function () {
    searchQuery = this.value;
    renderMenu();
  });

  document.querySelectorAll(".chip[data-category]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      activeCategory = chip.getAttribute("data-category");
      document.querySelectorAll(".chip[data-category]").forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      renderMenu();
    });
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  /* ============================================================
     GENERIC CAROUSEL (used by hero banner and drinks)
     Now returns { refresh() } so the drinks carousel can be rebuilt
     after search / category filtering changes its slides.
     ============================================================ */
  function initCarousel(opts) {
    var track = $(opts.trackId);
    var dotsWrap = $(opts.dotsId);
    var prevBtn = $(opts.prevId);
    var nextBtn = $(opts.nextId);
    if (!track || !dotsWrap || !prevBtn || !nextBtn) return null;

    var slides = [];
    var current = 0;
    var autoTimer;

    function updateDots() {
      dotsWrap.querySelectorAll("." + opts.dotClass).forEach(function (d, i) {
        d.setAttribute("aria-selected", i === current ? "true" : "false");
      });
    }

    function buildDots() {
      dotsWrap.innerHTML = "";
      slides = track.querySelectorAll(opts.slideSelector);
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.className = opts.dotClass;
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-selected", i === current ? "true" : "false");
        dot.setAttribute("aria-label", opts.dotLabel + " " + (i + 1));
        dot.addEventListener("click", function () { goTo(i); });
        dotsWrap.appendChild(dot);
      });
      var multiple = slides.length > 1; // no arrows/dots for a single slide
      prevBtn.hidden = !multiple;
      nextBtn.hidden = !multiple;
      dotsWrap.hidden = !multiple;
    }

    function goTo(i) {
      if (!slides.length) return;
      current = (i + slides.length) % slides.length;
      track.scrollTo({ left: track.clientWidth * current, behavior: "smooth" });
      updateDots();
      if (opts.autoAdvance) restartAuto();
    }

    prevBtn.addEventListener("click", function () { goTo(current - 1); });
    nextBtn.addEventListener("click", function () { goTo(current + 1); });

    var scrollTimeout;
    track.addEventListener("scroll", function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        if (!track.clientWidth) return;
        current = Math.round(track.scrollLeft / track.clientWidth);
        updateDots();
      }, 100);
    });

    function restartAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(function () { goTo(current + 1); }, 6000);
    }

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.addEventListener("resize", function () {
      track.scrollTo({ left: track.clientWidth * current });
    });

    buildDots();
    if (opts.autoAdvance && !reduceMotion) restartAuto();

    return {
      refresh: function () {
        current = 0;
        track.scrollTo({ left: 0, behavior: "instant" });
        buildDots();
      }
    };
  }

  /* ============================================================
     INIT
     ============================================================ */
  loadSavedLanguage();
  applyTranslations();
  renderMenu();
  renderCart();

  initCarousel({
    trackId: "hero-track",
    dotsId: "hero-dots",
    prevId: "hero-prev",
    nextId: "hero-next",
    slideSelector: ".hero-slide",
    dotClass: "hero-dot",
    dotLabel: "Banner",
    autoAdvance: true
  });

  drinksCarousel = initCarousel({
    trackId: "drinks-track",
    dotsId: "drinks-dots",
    prevId: "drinks-prev",
    nextId: "drinks-next",
    slideSelector: ".menu-card",
    dotClass: "drinks-dot",
    dotLabel: "Drink",
    autoAdvance: false
  });
})();
