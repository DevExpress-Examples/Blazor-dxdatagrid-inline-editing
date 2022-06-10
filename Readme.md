<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/351812089/22.1.2%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T985618)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->

# DataGrid for Blazor - How to implement the inline edit mode with the DisplayTemplate

The Data Grid was moved to maintenance support mode. No new features/capabilities will be added to this component. We recommend that you [migrate](https://docs.devexpress.com/Blazor/403162/grid/migrate-from-data-grid-to-grid) to the [Grid](https://docs.devexpress.com/Blazor/403143/grid) component. 

This example illustrates how to allow users to edit values in the inline edit row. 

![Data Grid - Inline edit form](images/dxdatagrid-inline-editing.gif)

The main idea of the solution is to create the [DisplayTemplate](https://docs.devexpress.com/Blazor/DevExpress.Blazor.DxDataGridColumn.DisplayTemplate) for each column and display the corresponding value or an editor based on the state of the current row. 

The **IsInEditMode** custom property defines the state of the current row. You can find the implementation of this custom property in the [WeatherForecastForEdit](./CS/BlazorGridInlineEditing/Data/WeatherForecastForEdit.cs) class. This class inherits the original [WeatherForecast](./CS/BlazorGridInlineEditing/Data/WeatherForecast.cs) model class and extends it with the **IsInEditMode** property. 

The **WeatherForecastForEdit** class also implements the [INotifyPropertyChanged](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged?view=net-5.0) interface. The Data Grid automatically detects such interfaces and handles the **PropertyChanged** event to re-render the corresponding row if the corresponding property value changes. 


<!-- default file list -->
## Files to look at

* [Index.razor](./CS/BlazorGridInlineEditing/Pages/Index.razor)
* [WeatherForecast.cs](./CS/BlazorGridInlineEditing/Data/WeatherForecast.cs)
* [WeatherForecastForEdit.cs](./CS/BlazorGridInlineEditing/Data/WeatherForecastForEdit.cs)
<!-- default file list end -->

## Documentation

* [DisplayTemplate](https://docs.devexpress.com/Blazor/DevExpress.Blazor.DxDataGridColumn.DisplayTemplate)
* [EditTemplate](https://docs.devexpress.com/Blazor/DevExpress.Blazor.DxDataGridColumn.EditTemplate)

## More Examples

* [Data Grid - Update records programmatically](https://github.com/DevExpress-Examples/blazor-DxDataGrid-edit-selected-row-by-clicking-on-external-button)
* [Data Grid - Separate Edit Form](https://github.com/DevExpress-Examples/blazor-DxDataGrid-Separate-Edit-Form)
