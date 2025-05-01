<?php
// index.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- … your <head> … -->
</head>
<body>
  <?php include __DIR__ . '/includes/header.php'; ?>
  <?php include __DIR__ . '/includes/hero.php'; ?>
  <?php include __DIR__ . '/includes/about.php'; ?>
  <?php include __DIR__ . '/includes/statistic.php'; ?>
  <?php include __DIR__ . '/includes/services.php'; ?>
  <?php include __DIR__ . '/includes/testimonials.php'; ?>
  <?php include __DIR__ . '/includes/clientle.php'; ?>
  <?php include __DIR__ . '/includes/upi-switch.php'; ?>
  <?php include __DIR__ . '/includes/contact.php'; ?>
  <?php include __DIR__ . '/includes/footer.php'; ?>

  <!-- JS bundles -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
