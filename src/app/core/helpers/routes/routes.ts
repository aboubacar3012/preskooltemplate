import { BehaviorSubject } from 'rxjs';

export class routes {
  public static layoutDirection: BehaviorSubject<string> =
    new BehaviorSubject<string>(localStorage.getItem('rtl') || '');
  private static Url = '';
  static rtl = this.layoutDirection.subscribe((res: string) => {
    this.Url = res;
  });

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get forgot_password(): string {
    return this.baseUrl + '/forgotpassword';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get error_screen(): string {
    return this.baseUrl + '/errorpage';
  }
  public static get dashboard(): string {
    return this.baseUrl + '/dashboard';
  }
  public static get students(): string {
    return this.baseUrl + '/students';
  }
  public static get main(): string {
    return this.baseUrl + '/dashboard/main';
  }
  public static get teacher(): string {
    return this.baseUrl + '/dashboard/teacher';
  }
  public static get student(): string {
    return this.baseUrl + '/dashboard/student';
  }
  public static get studentsadd(): string {
    return this.baseUrl + '/students/students-add';
  }
  public static get studentsedit(): string {
    return this.baseUrl + '/students/students-edit';
  }
  public static get studentlist(): string {
    return this.baseUrl + '/students/students-list';
  }
  public static get studentview(): string {
    return this.baseUrl + '/students/students-details';
  }
  public static get teacheradd(): string {
    return this.baseUrl + '/teachers/teachers-add';
  }
  public static get teacherslist(): string {
    return this.baseUrl + '/teachers/teachers-list';
  }
  public static get teachersdetails(): string {
    return this.baseUrl + '/teachers/teachers-details';
  }
  public static get teachersedit(): string {
    return this.baseUrl + '/teachers/teachers-edit';
  }
  public static get settings(): string {
    return this.baseUrl + '/settings/general-settings';
  }
  public static get addinvoice(): string {
    return this.baseUrl + '/invoices/add-invoice';
  }
  public static get banksettings(): string {
    return this.baseUrl + '/invoices/bank-settings';
  }
  public static get editinvoice(): string {
    return this.baseUrl + '/invoices/edit-invoice';
  }
  public static get viewinvoice(): string {
    return this.baseUrl + '/invoices/view-invoice';
  }
  public static get invoicessettings(): string {
    return this.baseUrl + '/invoices/invoices-settings';
  }
  public static get taxsettings(): string {
    return this.baseUrl + '/invoices/tax-settings';
  }
  public static get invoicespaid(): string {
    return this.baseUrl + '/invoices/invoices-paid';
  }
  public static get invoicesoverdue(): string {
    return this.baseUrl + '/invoices/invoices-overdue';
  }
  public static get invoicesdraft(): string {
    return this.baseUrl + '/invoices/invoices-draft';
  }
  public static get invoicesrecurring(): string {
    return this.baseUrl + '/invoices/invoices-recurring';
  }
  public static get invoicescancelled(): string {
    return this.baseUrl + '/invoices/invoices-cancelled';
  }
  public static get invoicesgrid(): string {
    return this.baseUrl + '/invoices/invoices-grid';
  }
  public static get invoiceslist(): string {
    return this.baseUrl + '/invoices/invoices-list';
  }
  public static get allblog(): string {
    return this.baseUrl + '/blog/all-blog';
  }
  public static get addblog(): string {
    return this.baseUrl + '/blog/add-blog';
  }
  public static get editblog(): string {
    return this.baseUrl + '/blog/edit-blog';
  }
  public static get departmentslist(): string {
    return this.baseUrl + '/departments/departments-list';
  }
  public static get departmentsadd(): string {
    return this.baseUrl + '/departments/departments-add';
  }
  public static get departmentsedit(): string {
    return this.baseUrl + '/departments/departments-edit';
  }
  public static get subjectsadd(): string {
    return this.baseUrl + '/subjects/subjects-add';
  }
  public static get subjectsedit(): string {
    return this.baseUrl + '/subjects/subjects-edit';
  }
  public static get subjectslist(): string {
    return this.baseUrl + '/subjects/subjects-list';
  }
  public static get feescollection(): string {
    return this.baseUrl + '/accounts/fees-collection';
  }
  public static get expenses(): string {
    return this.baseUrl + '/accounts/expenses';
  }
  public static get salary(): string {
    return this.baseUrl + '/accounts/salary';
  }
  public static get addfee(): string {
    return this.baseUrl + '/accounts/add-fees';
  }
  public static get addexpenses(): string {
    return this.baseUrl + '/accounts/add-expenses';
  }
  public static get addsalary(): string {
    return this.baseUrl + '/accounts/add-salary';
  }
  public static get holiday(): string {
    return this.baseUrl + '/holiday/holiday-main';
  }
  public static get fees(): string {
    return this.baseUrl + '/fees/fees-main';
  }
  public static get examlist(): string {
    return this.baseUrl + '/examlist/examlist-main';
  }
  public static get timetable(): string {
    return this.baseUrl + '/timetable/timetable-main';
  }
  public static get library(): string {
    return this.baseUrl + '/library/library-main';
  }
  public static get sports(): string {
    return this.baseUrl + '/sports/sports-main';
  }
  public static get hostel(): string {
    return this.baseUrl + '/hostel/hostel-main';
  }
  public static get transport(): string {
    return this.baseUrl + '/transport/transport-main';
  }
  public static get blankpage(): string {
    return this.baseUrl + '/blankpage/blankpage-main';
  }
  public static get basicinputs(): string {
    return this.baseUrl + '/forms/basicinputs';
  }
  public static get inputgroups(): string {
    return this.baseUrl + '/forms/inputgroups';
  }
  public static get horizontalform(): string {
    return this.baseUrl + '/forms/horizontalform';
  }
  public static get verticalform(): string {
    return this.baseUrl + '/forms/verticalform';
  }
  public static get formmask(): string {
    return this.baseUrl + '/forms/formmask';
  }
  public static get formvalidation(): string {
    return this.baseUrl + '/forms/formvalidation';
  }
  public static get basictables(): string {
    return this.baseUrl + '/tables/basictables';
  }
  public static get datatables(): string {
    return this.baseUrl + '/tables/datatables';
  }
  public static get event(): string {
    return this.baseUrl + '/events/events-main';
  }
  public static get carousel(): string {
    return this.baseUrl + '/base-ui/carousel';
  }
  public static get cards(): string {
    return this.baseUrl + '/base-ui/cards';
  }
  public static get breadcrumb(): string {
    return this.baseUrl + '/base-ui/breadcrumb';
  }
  public static get button_group(): string {
    return this.baseUrl + '/base-ui/button-group';
  }
  public static get buttons(): string {
    return this.baseUrl + '/base-ui/buttons';
  }
  public static get badges(): string {
    return this.baseUrl + '/base-ui/badges';
  }
  public static get avatar(): string {
    return this.baseUrl + '/base-ui/avatar';
  }
  public static get accordions(): string {
    return this.baseUrl + '/base-ui/accordions';
  }
  public static get progress_bars(): string {
    return this.baseUrl + '/base-ui/progress-bars';
  }
  public static get popover(): string {
    return this.baseUrl + '/base-ui/popover';
  }
  public static get placeholder(): string {
    return this.baseUrl + '/base-ui/placeholder';
  }
  public static get pagination(): string {
    return this.baseUrl + '/base-ui/pagination';
  }
  public static get offcanvas(): string {
    return this.baseUrl + '/base-ui/offcanvas';
  }
  public static get modal(): string {
    return this.baseUrl + '/base-ui/modal';
  }
  public static get media(): string {
    return this.baseUrl + '/base-ui/media';
  }
  public static get light_box(): string {
    return this.baseUrl + '/base-ui/light-box';
  }
  public static get alert(): string {
    return this.baseUrl + '/base-ui/alert';
  }
  public static get drop_down(): string {
    return this.baseUrl + '/base-ui/drop-down';
  }
  public static get images(): string {
    return this.baseUrl + '/base-ui/images';
  }
  public static get grid(): string {
    return this.baseUrl + '/base-ui/grid';
  }
  public static get video(): string {
    return this.baseUrl + '/base-ui/video';
  }
  public static get typography(): string {
    return this.baseUrl + '/base-ui/typography';
  }
  public static get tooltip(): string {
    return this.baseUrl + '/base-ui/tooltip';
  }
  public static get toasts(): string {
    return this.baseUrl + '/base-ui/toasts';
  }
  public static get tabs(): string {
    return this.baseUrl + '/base-ui/tabs';
  }
  public static get range_slider(): string {
    return this.baseUrl + '/base-ui/range-slider';
  }
  public static get spinner(): string {
    return this.baseUrl + '/base-ui/spinner';
  }
  public static get ribbon(): string {
    return this.baseUrl + '/elements/ribbon';
  }
  public static get clipboards(): string {
    return this.baseUrl + '/elements/clipboards';
  }
  public static get drag_drop(): string {
    return this.baseUrl + '/elements/drag-drop';
  }
  public static get rating(): string {
    return this.baseUrl + '/elements/rating';
  }
  public static get text_editor(): string {
    return this.baseUrl + '/elements/text-editor';
  }
  public static get counter(): string {
    return this.baseUrl + '/elements/counter';
  }
  public static get scrollbar(): string {
    return this.baseUrl + '/elements/scrollbar';
  }
  public static get notification(): string {
    return this.baseUrl + '/elements/notification';
  }
  public static get timeline(): string {
    return this.baseUrl + '/elements/timeline';
  }
  public static get horizontal_timeline(): string {
    return this.baseUrl + '/elements/horizontal-timeline';
  }
  public static get form_wizard(): string {
    return this.baseUrl + '/elements/form-wizard';
  }
  public static get prime_ng(): string {
    return this.baseUrl + '/charts/prime-ng';
  }
  public static get ng2_charts(): string {
    return this.baseUrl + '/charts/ng2-charts';
  }
  public static get apex_charts(): string {
    return this.baseUrl + '/charts/apex-charts';
  }
  public static get flag(): string {
    return this.baseUrl + '/icon/flag';
  }
  public static get weather(): string {
    return this.baseUrl + '/icon/weather';
  }
  public static get typicon(): string {
    return this.baseUrl + '/icon/typicon';
  }
  public static get themify(): string {
    return this.baseUrl + '/icon/themify';
  }
  public static get simple_line(): string {
    return this.baseUrl + '/icon/simple-line';
  }
  public static get pe7(): string {
    return this.baseUrl + '/icon/pe7';
  }
  public static get material(): string {
    return this.baseUrl + '/icon/material';
  }
  public static get ionic(): string {
    return this.baseUrl + '/icon/ionic';
  }
  public static get feather(): string {
    return this.baseUrl + '/icon/feather';
  }
  public static get fontawesome(): string {
    return this.baseUrl + '/icon/fontawesome';
  }
  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
  public static get inbox(): string {
    return this.baseUrl + '/inbox';
  }
  public static get compose(): string {
    return this.baseUrl + '/compose';
  }
}
