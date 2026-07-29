import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Highlight } from './highlight';

@Component({
  template: `<div appHighlight="lightblue">Hover me</div>`,
  imports: [Highlight],
})
class HostComponent {}

describe('Highlight', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HostComponent] });
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should set the background colour on mouseenter and clear it on mouseleave', () => {
    const div = fixture.debugElement.query(By.css('div'));
    div.triggerEventHandler('mouseenter', null);
    expect(div.nativeElement.style.backgroundColor).toBe('lightblue');

    div.triggerEventHandler('mouseleave', null);
    expect(div.nativeElement.style.backgroundColor).toBe('');
  });
});
