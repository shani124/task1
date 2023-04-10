import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.dropdown-toggle').click(function() {
      $('.dropdown-menu').toggle();
    });
  
    $(document).click(function(event) {
      if (!$(event.target).closest('.dropdown').length) {
        $('.dropdown-menu').hide();
      }
    });
  }

}
