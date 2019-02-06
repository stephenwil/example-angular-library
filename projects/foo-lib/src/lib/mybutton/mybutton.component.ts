import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "foo-mybutton",
  templateUrl: "./mybutton.component.html",
  styleUrls: ["./mybutton.component.scss"]
})
export class MybuttonComponent implements OnInit {
  @Input("title") title;
  @Input("subtitle") subtitle;
  @Input("content") content = "😄";

  @Output() btnClicked = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  handleBtnClick() {
    this.btnClicked.emit(true);
  }
}
