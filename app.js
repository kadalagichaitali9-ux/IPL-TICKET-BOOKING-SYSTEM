const matches = {
    "match-1": { label: "Match 01 · CSK vs MI", prices: { general: 1000, premium: 3000, vip: 8000 } },
    "match-2": { label: "Match 02 · RCB vs KKR", prices: { general: 900, premium: 2800, vip: 7500 } },
    "match-3": { label: "Match 03 · SRH vs RR", prices: { general: 850, premium: 2500, vip: 7000 } },
    "match-4": { label: "Match 04 · DC vs PBKS", prices: { general: 800, premium: 2400, vip: 6500 } },
    "match-5": { label: "Match 05 · GT vs LSG", prices: { general: 900, premium: 2700, vip: 7200 } }
};

const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
});

let toastTimer;

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 5000);
}

function updateSummary() {
    const matchSelect = document.getElementById("match-select");
    const standSelect = document.getElementById("stand-select");
    const quantityInput = document.getElementById("ticket-quantity");

    if (!matchSelect || !standSelect || !quantityInput) {
        return;
    }

    const match = matches[matchSelect.value];
    const stand = standSelect.value;
    const summaryElements = [
        document.getElementById("summary-match"),
        document.getElementById("summary-stand"),
        document.getElementById("summary-price"),
        document.getElementById("summary-quantity"),
        document.getElementById("summary-total")
    ];
    if (summaryElements.some((element) => !element)) {
        return;
    }

    const quantity = Number(quantityInput.value);
    const validQuantity = Number.isInteger(quantity)
        && quantity >= Number(quantityInput.min)
        && quantity <= Number(quantityInput.max);
    const price = match && match.prices[stand];

    summaryElements[0].textContent = match ? match.label : "Choose a match";
    summaryElements[1].textContent = stand
        ? standSelect.options[standSelect.selectedIndex].text
        : "Choose a stand";
    summaryElements[2].textContent = price !== undefined ? currency.format(price) : "—";
    summaryElements[3].textContent = quantityInput.value || "—";
    summaryElements[4].textContent = price !== undefined && validQuantity
        ? currency.format(price * quantity)
        : "—";
}

const matchSelect = document.getElementById("match-select");
const standSelect = document.getElementById("stand-select");
const quantityInput = document.getElementById("ticket-quantity");

[...document.querySelectorAll(".menu-toggle")].forEach((menuToggle) => {
    const navigation = document.getElementById(menuToggle.getAttribute("aria-controls"));
    if (!navigation) {
        return;
    }

    const setMenuOpen = (isOpen) => {
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        navigation.classList.toggle("is-open", isOpen);
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            setMenuOpen(false);
        }
    });
});

[matchSelect, standSelect, quantityInput].forEach((control) => {
    if (control) {
        control.addEventListener("input", updateSummary);
        control.addEventListener("change", () => {
            updateSummary();
            showToast("Booking summary updated.");
        });
    }
});

const teamFilter = document.getElementById("team-filter");
if (teamFilter) {
    teamFilter.addEventListener("change", (event) => {
        const selectedTeam = event.currentTarget.value;
        document.querySelectorAll(".match-card").forEach((card) => {
            card.hidden = selectedTeam !== "all" && !card.dataset.teams.split(",").includes(selectedTeam);
        });
    });
}

const scheduleCards = document.getElementById("schedule-cards");
if (scheduleCards) {
    document.querySelectorAll("[data-schedule-view]").forEach((button) => {
        button.addEventListener("click", () => {
            const isListView = button.dataset.scheduleView === "list";
            scheduleCards.classList.toggle("is-list", isListView);
            document.querySelectorAll("[data-schedule-view]").forEach((viewButton) => {
                const isActive = viewButton === button;
                viewButton.classList.toggle("is-active", isActive);
                viewButton.setAttribute("aria-pressed", String(isActive));
            });
        });
    });
}

document.querySelectorAll("[data-book-match]").forEach((link) => {
    link.addEventListener("click", (event) => {
        const selectedMatch = link.dataset.bookMatch;
        if (matchSelect && matches[selectedMatch]) {
            event.preventDefault();
            matchSelect.value = selectedMatch;
            updateSummary();
            document.getElementById("booking").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            showToast(`${matches[selectedMatch].label} selected. Complete your booking below.`);
        }
    });
});

if (matchSelect && document.getElementById("ticket-booking-form")) {
    const requestedMatch = new URLSearchParams(window.location.search).get("match");
    if (requestedMatch && matches[requestedMatch]) {
        matchSelect.value = requestedMatch;
    }
}

const bookingForms = [
    document.getElementById("booking-form"),
    document.getElementById("ticket-booking-form")
].filter(Boolean);

bookingForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formMessage = document.getElementById("form-message");
        const message = "Booking confirmed! This is a demo; no ticket has been reserved.";

        if (formMessage) {
            formMessage.textContent = message;
            formMessage.hidden = false;
        }
        showToast(message);
    });

    form.addEventListener("reset", () => {
        const formMessage = document.getElementById("form-message");
        if (formMessage) {
            formMessage.hidden = true;
            formMessage.textContent = "";
        }

        window.setTimeout(updateSummary, 0);
    });
});

updateSummary();
