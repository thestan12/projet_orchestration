import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {
  @Input() gender: string;

  maleProfilePic = '../../../assets/icones/male.png';
  femaleProfilePic = '../../../assets/icones/female.png';

  constructor(private elRef: ElementRef,
              private renderer: Renderer2){
  }

  ngOnInit(): void {
    let imageUrl = this.maleProfilePic;
    if(this.gender === 'F') imageUrl = this.femaleProfilePic;
    this.renderer.setAttribute(this.elRef.nativeElement, 'src', imageUrl);
  }
}
