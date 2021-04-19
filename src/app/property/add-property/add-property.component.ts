import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  SellRent = '1';

  constructor(private route: Router) { }

  ngOnInit() {
    // this.addPropertyForm.control['Name'].setValue('Default Value');

    setTimeout(() => {
      // this.addPropertyForm.control['Name'].setValue('Default Value');
    });
  }

  onBack()
  {
    this.route.navigate(['/']);
  }

  onSubmit(){
    console.log('Congrats, form');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
