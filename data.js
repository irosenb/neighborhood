function get_location() {
  navigator.geolocation.getCurrentPosition(show_map);
}