import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Students} from '../../models/students';
import {SearchService} from '../../services/search/search.service';

@Component({
  selector: 'app-search-something',
  templateUrl: './search-something.component.html',
  styleUrls: ['./search-something.component.scss']
})
export class SearchSomethingComponent implements OnInit {

  private searchSomethingForm: FormGroup;

  constructor(private fb: FormBuilder,
              private searchService: SearchService) {

  }

  ngOnInit() {
    this.searchSomethingForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(100)]],
      category: ['', [Validators.required]],
      tags: ['']
    });
  }

  runSearch() {
    let content = this.searchSomethingForm.controls.content.value;
    let category = this.searchSomethingForm.get('category').value;
    let tags = this.searchSomethingForm.controls.tags.value;
    let user: Promise<Students> = this.searchService.searchUser(content, category, tags);
    user.then(u => {
      console.log(u);
    });
  }

}
