import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'drawer-headless-demo',
    templateUrl: './academic-level-list.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass]
})
export class AcademicLevelList {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: any): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}