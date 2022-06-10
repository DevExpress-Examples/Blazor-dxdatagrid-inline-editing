using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace BlazorGridInlineEditing.Data {
    public class WeatherForecastForEdit : WeatherForecast, INotifyPropertyChanged {
        public event PropertyChangedEventHandler? PropertyChanged;
        private bool _IsInEditMode { get; set; } = false;
        public bool IsInEditMode {
            get {
                return this._IsInEditMode;
            }
            set {
                if (value != this._IsInEditMode) {
                    this._IsInEditMode = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private void NotifyPropertyChanged([CallerMemberName] String propertyName = "") {
            if (PropertyChanged != null) {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }
    }
}
