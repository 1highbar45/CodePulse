import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  model: AddBlogPost;
  isImageSelectorVisible : boolean = false;

  constructor() {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date(),
      categories: []
    }
  }

  onFormSubmit(): void {
    console.log(this.model);
    // this.blogPostService.createBlogPost(this.model)
    // .subscribe({
    //   next: (response) => {
    //     this.router.navigateByUrl('/admin/blogposts');
    //   }
    // });
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }
}
