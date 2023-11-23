import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundsService } from 'src/app/services/sounds.service';
import { Sound } from 'src/app/models/sound.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-sound-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'fileName'];
  dataSource: Sound[] = [];
  loading = false;
  selectedSound: Sound | null = null;

  constructor(private soundsService: SoundsService) {}

  ngOnInit() {
    this.getSounds();
  }

  selectSound(sound: Sound) {
    this.selectedSound = this.selectedSound === sound ? null : sound;
  }

  getSounds() {
    this.loading = true;
    this.soundsService.getSounds().subscribe(res => {
      this.dataSource = res;
      this.loading = false;
    }, err => this.loading = false);
  }

}
