*Files to look at*:

* [Index.razor](./CS/BlazorGridInlineEditing/Pages/Index.razor)
* [WeatherForecast.cs](./CS/BlazorGridInlineEditing/Data/WeatherForecast.cs)
* [WeatherForecastForEdit.cs](./CS/BlazorGridInlineEditing/Data/WeatherForecastForEdit.cs)

### DataGrid for Blazor - How to implement the inline edit mode using DisplayTemplate

This example illustrates a possible implementation of the scenario when cell values are edited within the in-line edit row. 
The main idea of the demonstrated solution is to create the *[DisplayTemplate](https://docs.devexpress.com/Blazor/DevExpress.Blazor.DxDataGridColumn.DisplayTemplate)* template for each column and display the corresponding value or an editor based on the state of the current row. 

The state of the current row is defined by the *IsInEditMode* custom property which is implemented in the *[WeatherForecastForEdit](./CS/BlazorGridInlineEditing/Data/WeatherForecastForEdit.cs)* class. This class inherits the original *[WeatherForecast](./CS/BlazorGridInlineEditing/Data/WeatherForecast.cs)* model class and extends it with the mentioned property. 

Also this class implements the *[INotifyPropertyChanged](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged?view=net-5.0)* interface. DxDataGrid automatically detects such classes and handles the *PropertyChanged* event, so if the corresponding property is changed, DxDataGrid re-renders the corresponding row. 