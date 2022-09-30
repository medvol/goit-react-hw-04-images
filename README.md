# Image Search

Write a keyword image search application. 

For HTTP requests, use a public image search service Pixabay. Register and get a private access key.

#### Description of the component `<Searchbar>`

The component takes one prop onSubmit - a function to pass the value of the iput When the form is submitted. Creates a DOM element of the following structure.

  ```
  <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>
    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
  </header>
  ```

#### Description of the `<ImageGallery>` component

A list of image cards. Creates a DOM element of the following structure.
```
<ul class="gallery">
  <! -- Set <li> with images -->
</ul>
```

#### Description of the component `<ImageGalleryItem>`

A list item component with an image. Creates a DOM element of the following structure.
```
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

#### Description of the `<Button>` component

Pressing the Load more button should load the next batch of Images and rendered with the previous ones. The button should be rendered only when there are some loaded images. If the image array is empty, the button is not rendered.

#### Description of the `<Loader>` component

Spinner component, displays while images are being loaded. Use any ready made component, e.g. react-loader-spinner or any or any other.

#### Description of the component `<Modal>`

When you click on a gallery item a modal window with a dark overlay and display a larger version of the image. The modal window should Close by pressing ESC or by clicking on the overlay.
