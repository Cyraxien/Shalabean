// Audience tab toggle (purely visual, mirrors the "New to ful" / "Grew up on ful" switch)
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.hero-tabs');
    group.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Flavor cards: tap/click to pin the ingredients panel open (hover already previews it on desktop)
document.querySelectorAll('.ingredients-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.flavor-card');
    const expanded = card.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', expanded);
  });
});

// Waitlist form (front-end only — wire this up to your email provider / backend)
const form = document.getElementById('waitlist-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!email) return;

  // TODO: replace with a real submission (e.g. fetch to your waitlist API)
  console.log('Waitlist signup:', email);

  note.textContent = "You're on the list. We'll email you when tubs land in LA.";
  form.reset();
});
