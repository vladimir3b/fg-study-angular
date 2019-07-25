import { ManageProductsService } from './../../../_root/services/manage-products.service';
import { ManageClientsService } from './../../../_root/services/manage-clients.service';
import { ManageSellingsService } from './../../../_root/services/manage-sellings.service';
import { ISellingModel } from './../../../../models/sellings.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatBottomSheet, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'fg-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './../../../../static-resources/styles/data-tables.scss' ]
})
export class ShoppingListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSizeOptions = [5, 10, 25, 50];
  option = 1;
  dataSource: MatTableDataSource<ISellingModel>;
  displayedColumns = [
    'clientId',
    'productId',
    'quantity',
    'price',
    'date'
  ];
  admin = true;

  constructor(
    private _manageSellings: ManageSellingsService,
    private _manageClients: ManageClientsService,
    private _manageProducts: ManageProductsService
  ) {
    this.dataSource = new MatTableDataSource(this._manageSellings.sellings);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getClientName(clientId: string): string {
    return this._manageClients.getNameForCliendId(clientId);
  }

  getProductName(clientId: string): string {
    return this._manageProducts.getProductById(clientId).name;
  }

}
