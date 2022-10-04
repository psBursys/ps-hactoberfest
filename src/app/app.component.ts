import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcInput from '@grapecity/wijmo.input';
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'celltemplate-txtarea-ie';

  data1: wjcCore.CollectionView;
  colname = "1";
  colvalue = "";
  tplSimpleButton: wjcGrid.ICellTemplateFunction;
  @ViewChild('pp') pp: wjcInput.Popup;

  initGrid(grid: wjcGrid.FlexGrid) {
    grid.columns.getColumn('country').isReadOnly = true; // set the read-only property so that it does not go into edit mode
    grid.hostElement.addEventListener('dblclick', e => {
      var hti = grid.hitTest(e);
      if(hti.panel === grid.cells && grid.columns[hti.col].binding === 'country') {
        var cell = hti.panel.getCellElement(hti.row, hti.col);
        this.pp.owner = cell;
        this.pp.show(false, (pp) => {
          if(pp.dialogResult === 'wj-hide-ok') {
            // i have used a simple input element
            // you can get the result here
            // and update the grid's data
            var text = pp.content.querySelector("input[name='saveData']").value;
            grid.setCellData(hti.row, hti.col, text);
          }
        })
      }
    })
  }

  /**
   * 初期処理.グリッドにデータをセットする.
   *
   * @memberof AppComponent
   */
  ngOnInit() {
    var countries = "US,Germany,UK,Japan,Italy,Greece".split(","),
      data = [];
    for (var i = 0; i < 200; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        downloads: Math.round(Math.random() * 20000),
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000
      });
    }

    this.data1 = new wjcCore.CollectionView(data);
  }
}