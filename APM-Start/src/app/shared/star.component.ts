import { Component, OnChanges, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
 selector:'pm-star',
 templateUrl:'./star.component.html',
 styleUrls:['./star.component.css']
})

export class StarComponet implements OnChanges, OnInit {
 @Input() rating:number;
 starWidth: number;
 @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();


ngOnInit():void{
   this.starWidth = this.rating * 86/5;
}

ngOnChanges() : void
{
  //this.starWidth = this.rating * 86/5;
}

OnClick() : void {
 this.ratingClicked.emit(this.rating);
}
 
}