(function() {
    // Display the image to be uploaded.
    $('#dvd_image').on('change', function(e) {
      return readURL(this);
    });
  
    this.readURL = function(input) {
      var reader;
      
      // Read the contents of the image file to be uploaded and display it.
  
      if (input.files && input.files[0]) {
        reader = new FileReader();
        reader.onload = function(e) {
          var $preview;
          $('.image_to_upload').attr('src', e.target.result);
          $preview = $('.preview');
          if ($preview.hasClass('hide')) {
            return $preview.toggleClass('hide');
          }
        };
        return reader.readAsDataURL(input.files[0]);
      }
    };
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQXFDO0VBQUE7RUFDckMsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLFFBQUEsQ0FBQyxDQUFELENBQUE7V0FDM0IsT0FBQSxDQUFRLElBQVI7RUFEMkIsQ0FBN0I7O0VBR0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ1gsUUFBQSxNQUFBOzs7O0lBR0UsSUFBSSxLQUFLLENBQUMsS0FBTixJQUFlLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBRCxDQUE5QjtNQUNFLE1BQUEsR0FBUyxJQUFJLFVBQUosQ0FBQTtNQUVULE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQUEsQ0FBQyxDQUFELENBQUE7QUFDcEIsWUFBQTtRQUFNLENBQUEsQ0FBRSxrQkFBRixDQUFxQixDQUFDLElBQXRCLENBQTJCLEtBQTNCLEVBQWtDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBM0M7UUFDQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLFVBQUY7UUFDWCxJQUFHLFFBQVEsQ0FBQyxRQUFULENBQWtCLE1BQWxCLENBQUg7aUJBQ0UsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsTUFBckIsRUFERjs7TUFIYzthQU1oQixNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUQsQ0FBaEMsRUFURjs7RUFKUztBQUowQiIsInNvdXJjZXNDb250ZW50IjpbIiAgIyBEaXNwbGF5IHRoZSBpbWFnZSB0byBiZSB1cGxvYWRlZC5cbiQoJyNkdmRfaW1hZ2UnKS5vbiAnY2hhbmdlJywgKGUpIC0+XG4gIHJlYWRVUkwodGhpcyk7XG5cbkByZWFkVVJMID0gKGlucHV0KSAtPlxuICAjXG4gICMgUmVhZCB0aGUgY29udGVudHMgb2YgdGhlIGltYWdlIGZpbGUgdG8gYmUgdXBsb2FkZWQgYW5kIGRpc3BsYXkgaXQuXG4gICNcbiAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKVxuICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgLT5cbiAgICAgICQoJy5pbWFnZV90b191cGxvYWQnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpXG4gICAgICAkcHJldmlldyA9ICQoJy5wcmV2aWV3JylcbiAgICAgIGlmICRwcmV2aWV3Lmhhc0NsYXNzKCdoaWRlJylcbiAgICAgICAgJHByZXZpZXcudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTsiXX0=
  //# sourceURL=coffeescript
  