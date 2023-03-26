
var phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
var selectHTML = '<select>';
for (var i = 0; i < phoneManufacturers.length; i++) {
  selectHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}
selectHTML += '</select>';
document.write(selectHTML);
