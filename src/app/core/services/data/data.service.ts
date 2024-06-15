import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';
export interface SideBarMenu {
  menuValue: string;
  route: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  icon: string;
  base: string;
  subMenus: SubMenu[];
}

export interface SubMenu {
  menuValue: string;
  route: string;
  base: string;
  base2: string;
  base3: string;
  base4: string;
  base5: string;
  base6: string;
}

export interface SideBar {
  tittle: string;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: SideBarMenu[];
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public sideBar: SideBar[] = [
    {
      tittle: 'Main Menu',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'gauge',
          base: 'dashboard',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.main,
              base: 'main',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Teacher Dashboard',
              route: routes.teacher,
              base: 'teacher',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student Dashboard',
              route: routes.student,
              base: 'student',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Students',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'graduation-cap',
          base: 'students',
          subMenus: [
            {
              menuValue: 'Student List',
              route: routes.studentlist,
              base: 'students-list',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student View',
              route: routes.studentview,
              base: 'students-details',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student Add',
              route: routes.studentsadd,
              base: 'students-add',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student Edit',
              route: routes.studentsedit,
              base: 'students-edit',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Teachers',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'chalkboard-teacher',
          base: 'teachers',
          subMenus: [
            {
              menuValue: 'Teachers List',
              route: routes.teacherslist,
              base: 'teachers-list',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Teachers View',
              route: routes.teachersdetails,
              base: 'teachers-details',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Teachers Add',
              route: routes.teacheradd,
              base: 'teachers-add',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Teachers Edit',
              route: routes.teachersedit,
              base: 'teachers-edit',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Departments',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'building',
          base: 'departments',
          subMenus: [
            {
              menuValue: 'Departments List',
              route: routes.departmentslist,
              base: 'departments-list',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Departments Add',
              route: routes.departmentsadd,
              base: 'departments-add',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Departments Edit',
              route: routes.departmentsedit,
              base: 'departments-edit',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Subjects',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'book-reader',
          base: 'subjects',
          subMenus: [
            {
              menuValue: 'Subjects List',
              route: routes.subjectslist,
              base: 'subjects-list',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Subjects Add',
              route: routes.subjectsadd,
              base: 'subjects-add',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Subjects Edit',
              route: routes.subjectsedit,
              base: 'subjects-edit',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Invoices',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'clipboard',
          base: 'invoices',
          subMenus: [
            {
              menuValue: 'Invoices List',
              route: routes.invoiceslist,
              base: 'invoices-list',
              base2: 'invoices-paid',
              base3: 'invoices-overdue',
              base4: 'invoices-draft',
              base5: 'invoices-recurring',
              base6: 'invoices-cancelled',
            },
            {
              menuValue: 'Invoices Grid',
              route: routes.invoicesgrid,
              base: 'invoices-grid',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Add Invoices',
              route: routes.addinvoice,
              base: 'add-invoice',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Edit Invoices',
              route: routes.editinvoice,
              base: 'edit-invoice',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Invoices Details',
              route: routes.viewinvoice,
              base: 'view-invoice',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Invoices Settings',
              route: routes.invoicessettings,
              base: 'invoices-settings',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Management',
      icon: 'layers',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Accounts',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'file-invoice-dollar',
          base: 'accounts',
          subMenus: [
            {
              menuValue: 'Fees Collection',
              route: routes.feescollection,
              base: 'fees-collection',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Expenses',
              route: routes.expenses,
              base: 'expenses',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Salary',
              route: routes.salary,
              base: 'salary',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Add Fees',
              route: routes.addfee,
              base: 'add-fees',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Add Expenses',
              route: routes.addexpenses,
              base: 'add-expenses',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Add Salary',
              route: routes.addsalary,
              base: 'add-salary',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Holiday',
          route: routes.holiday,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'holly-berry',
          base: 'holiday',
          subMenus: [],
        },
        {
          menuValue: 'Fees',
          route: routes.fees,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'comment-dollar',
          base: 'fees',
          subMenus: [],
        },
        {
          menuValue: 'Exam List',
          route: routes.examlist,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'clipboard-list',
          base: 'examlist',
          subMenus: [],
        },
        {
          menuValue: 'Events',
          route: routes.event,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar-day',
          base: 'events',
          subMenus: [],
        },
        {
          menuValue: 'Time Table',
          route: routes.timetable,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'clipboard-list',
          base: 'timetable',
          subMenus: [],
        },
        {
          menuValue: 'Libary',
          route: routes.library,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'clipboard-list',
          base: 'library',
          subMenus: [],
        },
        {
          menuValue: 'Blogs',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'newspaper',
          base: 'blog',
          subMenus: [
            {
              menuValue: 'All Blogs',
              route: routes.allblog,
              base: 'all-blog',
              base2: 'pending-blog',
              base3: 'blog-details',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Add Blog',
              route: routes.addblog,
              base: 'add-blog',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Edit Blog',
              route: routes.editblog,
              base: 'edit-blog',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Settings',
          route: routes.settings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'cog',
          base: 'settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Authentication',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'shield-alt',
          base: 'login',
          subMenus: [
            {
              menuValue: 'Login',
              route: routes.login,
              base: 'login',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Register',
              route: routes.register,
              base: 'register',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Forgot Password',
              route: routes.forgot_password,
              base: 'forgot-password',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Error',
              route: routes.error_screen,
              base: 'errorpage',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Blank Page',
          route: routes.blankpage,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file',
          base: 'blankpage-main',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Other',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Sports',
          route: routes.sports,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'clipboard-list',
          base: 'sports',
          subMenus: [],
        },
        {
          menuValue: 'Hostel',
          route: routes.hostel,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'hotel',
          base: 'hostel',
          subMenus: [],
        },
        {
          menuValue: 'Transport',
          route: routes.transport,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bus',
          base: 'transport',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'UI Interface',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Base UI',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'cog',
          base: 'base-ui',
          subMenus: [
            {
              menuValue: 'Alerts',
              route: routes.alert,
              base: 'alert',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Accordions',
              route: routes.accordions,
              base: 'accordions',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Avatar',
              route: routes.avatar,
              base: 'avatar',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Badges',
              route: routes.badges,
              base: 'badges',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Buttons',
              route: routes.buttons,
              base: 'buttons',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Button Group',
              route: routes.button_group,
              base: 'button-group',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Breadcrumb',
              route: routes.breadcrumb,
              base: 'breadcrumb',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Cards',
              route: routes.cards,
              base: 'cards',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Carousel',
              route: routes.carousel,
              base: 'carousel',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Dropdowns',
              route: routes.drop_down,
              base: 'drop-down',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Grid',
              route: routes.grid,
              base: 'grid',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Images',
              route: routes.images,
              base: 'images',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Lightbox',
              route: routes.light_box,
              base: 'light-box',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Media',
              route: routes.media,
              base: 'media',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Modals',
              route: routes.modal,
              base: 'modal',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Offcanvas',
              route: routes.offcanvas,
              base: 'offcanvas',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Pagination',
              route: routes.pagination,
              base: 'pagination',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Popover',
              route: routes.popover,
              base: 'popover',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Progress Bars',
              route: routes.progress_bars,
              base: 'progress-bars',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Placeholders',
              route: routes.placeholder,
              base: 'placeholder',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Range Slider',
              route: routes.range_slider,
              base: 'range-slider',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Spinner',
              route: routes.spinner,
              base: 'spinner',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Tabs',
              route: routes.tabs,
              base: 'tabs',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Toasts',
              route: routes.toasts,
              base: 'toasts',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Tooltip',
              route: routes.tooltip,
              base: 'tooltip',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Typography',
              route: routes.typography,
              base: 'typography',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Videos',
              route: routes.video,
              base: 'video',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Elements',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'box',
          base: 'elements',
          subMenus: [
            {
              menuValue: 'Ribbon',
              route: routes.ribbon,
              base: 'ribbon',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Clipboard',
              route: routes.clipboards,
              base: 'clipboards',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Drag & Drop',
              route: routes.drag_drop,
              base: 'drag-drop',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Rating',
              route: routes.rating,
              base: 'rating',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Text Editor',
              route: routes.text_editor,
              base: 'text-editor',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Counter',
              route: routes.counter,
              base: 'counter',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Scrollbar',
              route: routes.scrollbar,
              base: 'scrollbar',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Notification',
              route: routes.notification,
              base: 'notification',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Timeline',
              route: routes.timeline,
              base: 'timeline',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Horizontal Timeline',
              route: routes.horizontal_timeline,
              base: 'horizontal-timeline',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Form Wizard',
              route: routes.form_wizard,
              base: 'form-wizard',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Charts',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'bar-chart',
          base: 'charts',
          subMenus: [
            {
              menuValue: 'Apex Charts',
              route: routes.apex_charts,
              base: 'apex-charts',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Ng2-Charts',
              route: routes.ng2_charts,
              base: 'ng2-charts',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Icons',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'award',
          base: 'icon',
          subMenus: [
            {
              menuValue: 'Fontawesome Icons',
              route: routes.fontawesome,
              base: 'fontawesome',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Feather Icons',
              route: routes.feather,
              base: 'feather',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Ionic Icons',
              route: routes.ionic,
              base: 'ionic',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Material Icons',
              route: routes.material,
              base: 'material',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'pe7 Icons',
              route: routes.pe7,
              base: 'pe7',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Simpleline Icons',
              route: routes.simple_line,
              base: 'simple-line',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Themify Icons',
              route: routes.themify,
              base: 'themify',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Weather Icons',
              route: routes.weather,
              base: 'weather',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Typicon Icons',
              route: routes.typicon,
              base: 'typicon',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Flag Icons',
              route: routes.flag,
              base: 'flag',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Forms',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'columns',
          base: 'forms',
          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.basicinputs,
              base: 'basicinputs',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Input Groups',
              route: routes.inputgroups,
              base: 'inputgroups',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.horizontalform,
              base: 'horizontalform',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Vertical Form',
              route: routes.verticalform,
              base: 'verticalform',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Form Mask',
              route: routes.formmask,
              base: 'formmask',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Form Validation',
              route: routes.formvalidation,
              base: 'formvalidation',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
        {
          menuValue: 'Tables',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'table',
          base: 'tables',
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.basictables,
              base: 'basictables',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Data Tables',
              route: routes.datatables,
              base: 'datatables',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        }
      ],
    },
  ];
  public getSideBarData: BehaviorSubject<Array<SideBar>> = new BehaviorSubject<
    Array<SideBar>
  >(this.sideBar);
  studentsList = [
    {
      id: 1,
      idNo: 'PRE1234',
      name: 'Aaliyah',
      class: '10 A',
      dob: '	2 Feb 2002',
      parentName: 'Jeffrey Wong',
      mobileNumber: '097 3584 5870',
      address: '911 Deer Ridge Drive,USA',
    },
    {
      id: 2,
      idNo: 'PRE2153',
      name: 'Calvin',
      class: '9 B',
      dob: '	8 Dec 2003',
      parentName: '	Minnie J Shaffer',
      mobileNumber: '701 753 3810',
      address: '1900 Hidden Meadow Drive, Crete',
    },
    {
      id: 3,
      idNo: 'PRE1252',
      name: 'Joe Kelly',
      class: '11 C',
      dob: '	7 Oct 2000',
      parentName: 'Vincent Howard',
      mobileNumber: '402 221 7523',
      address: '3979 Ashwood Drive, Omaha',
    },
    {
      id: 4,
      idNo: 'PRE2143',
      name: 'Levell Scott',
      class: '10 A',
      dob: '	12 Apr 2002',
      parentName: 'Jeffrey Scott',
      mobileNumber: '026 7318 4366',
      address: 'P.O. Box: 41, Gaborone',
    },
    {
      id: 5,
      idNo: 'PRE1534',
      name: 'Lois A',
      class: '10 A',
      dob: '22 Jul 2006',
      parentName: '	Cleary Wong',
      mobileNumber: '413 289 1314',
      address: '2844 Leverton Cove Road, Palmer',
    },
    {
      id: 6,
      idNo: 'PRE2213',
      name: 'Mallyne',
      class: '8 A',
      dob: '3 June 2010',
      parentName: 'Fields Malynne',
      mobileNumber: '242 362 3100',
      address: '	Bacardi Rd P.O. Box N-4880, New Providence',
    },
    {
      id: 7,
      idNo: 'PRE2431',
      name: 'Minnie',
      class: '11 C',
      dob: '24 Feb 2000',
      parentName: 'J Shaffer',
      mobileNumber: '952 512 4909',
      address: '	4771 Oral Lake Road, Golden Valley',
    },
    {
      id: 8,
      idNo: 'PRE1234',
      name: 'Nathan Humphries',
      class: '10 B',
      dob: '26 Apr 1994',
      parentName: 'Stephen Marley',
      mobileNumber: '077 3499 9959',
      address: '	86 Lamphey Road, Thelnetham',
    },
  ];
  teachersList = [
    {
      id: 1,
      idNo: 'PRE1234',
      name: 'NathanHumphries',
      class: '10',
      gender: 'Male',
      subject: 'Biology',
      section: 'A',
      mobileNumber: '077 3499 9959',
      address: '86 Lamphey Road, Thelnetham',
    },
    {
      id: 2,
      idNo: 'PRE1434',
      name: 'Vincent',
      class: '10',
      gender: 'Male',
      subject: 'Mathematics',
      section: 'C',
      mobileNumber: '402 221 7523',
      address: '3979 Ashwood Drive, Omaha',
    },
    {
      id: 3,
      idNo: 'PRE1534',
      name: 'Lois A',
      class: '10',
      gender: 'Female',
      subject: 'English',
      section: 'B',
      mobileNumber: '413 289 1314',
      address: '2844 Leverton Cove Road, Palmer',
    },
    {
      id: 4,
      idNo: 'PRE2143',
      name: 'Levell Scott',
      class: '10',
      gender: '	Male',
      subject: 'Science',
      section: 'B',
      mobileNumber: '026 7318 4366',
      address: 'P.O. Box: 41, Gaborone',
    },
    {
      id: 5,
      idNo: 'PRE2153',
      name: 'Calvin',
      class: '9',
      gender: 'Male',
      subject: 'Mathematics',
      section: 'C',
      mobileNumber: '701 753 3810',
      address: '1900 Hidden Meadow Drive, Crete',
    },
    {
      id: 6,
      idNo: 'PRE2209',
      name: 'Aaliyah',
      class: '10',
      gender: 'Female',
      subject: 'Mathematics',
      section: 'A',
      mobileNumber: '097 3584 5870',
      address: '911 Deer Ridge Drive,USA',
    },
    {
      id: 7,
      idNo: 'PRE2213',
      name: 'Mallyne',
      class: '8',
      gender: 'Female',
      subject: 'Physics',
      section: 'A',
      mobileNumber: '242 362 3100',
      address: 'Bacardi Rd P.O. Box N-4880, New Providence',
    },
    {
      id: 8,
      idNo: 'PRE2345',
      name: 'Kozma Tatari',
      class: '9',
      gender: 'Female',
      subject: 'Science',
      section: 'A',
      mobileNumber: '04 2239 968',
      address: 'Rruga E Kavajes, Condor Center, Tirana',
    },
    {
      id: 9,
      idNo: 'PRE2365',
      name: 'John Chambers',
      class: '11',
      gender: 'Male',
      subject: 'Botony',
      section: 'B',
      mobileNumber: '870 663 2334',
      address: '4667 Sunset Drive, Pine Bluff',
    },
  ];
  departmentsList = [
    {
      id: 1,
      idNo: 'PRE1534',
      name: 'MCA',
      hod: 'Lois A',
      startedYear: '1992',
      noOfStudents: '200',
    },
    {
      id: 2,
      idNo: 'PRE2143',
      name: 'Electrical Engg',
      hod: 'Levell Scott',
      startedYear: '1994',
      noOfStudents: '163',
    },
    {
      id: 3,
      idNo: 'PRE2153',
      name: '	BCA',
      hod: 'Calvin',
      startedYear: '1992',
      noOfStudents: '152',
    },
    {
      id: 4,
      idNo: 'PRE2209',
      name: 'Computer Science Engg',
      hod: 'Aaliyah',
      startedYear: '1995',
      noOfStudents: '180',
    },
    {
      id: 5,
      idNo: 'PRE2213',
      name: 'Mechanical Engg',
      hod: 'Malynne',
      startedYear: '1999',
      noOfStudents: '240',
    },
    {
      id: 6,
      idNo: 'PRE2431',
      name: 'Civil Engg',
      hod: 'Minnie',
      startedYear: '2000',
      noOfStudents: '195',
    },
  ];
  subjectsList = [
    {
      id: 1,
      idNo: 'PRE1534',
      name: 'Botony',
      class: '9',
    },
    {
      id: 2,
      idNo: 'PRE2143',
      name: '	Science',
      class: '3',
    },
    {
      id: 3,
      idNo: 'PRE2153',
      name: '	English',
      class: '4',
    },
    {
      id: 4,
      idNo: 'PRE2209',
      name: '	Mathematics',
      class: '5',
    },
    {
      id: 5,
      idNo: 'PRE2213',
      name: 'History',
      class: '6',
    },
    {
      id: 6,
      idNo: 'PRE2431',
      name: 'Geography',
      class: '8',
    },
  ];
  invoicesList = [
    {
      s_no: 1,
      idno: 'INV001',
      category: 'Software',
      createdOn: '16 June 2022',
      invoiceto: 'Barbara Moore',
      amount: '$5200',
      dueDate: '23 June 2022',
      status: 'Paid',
      user: 'avatar-02',
    },
    {
      s_no: 2,
      idno: 'INV002',
      category: 'Food',
      createdOn: '18 June 2022',
      invoiceto: 'Karlene Chaidez',
      amount: '$3800',
      dueDate: '24 June 2022',
      status: 'Overdue',
      user: 'avatar-04',
    },
    {
      s_no: 3,
      idno: 'INV003',
      category: 'Marketing',
      createdOn: '20 June 2022',
      invoiceto: 'Russell Copeland',
      amount: '$1800',
      dueDate: '26 June 2022',
      status: 'Paid',
      user: 'avatar-05',
    },
    {
      s_no: 4,
      idno: 'INV004',
      category: 'Repairs',
      createdOn: '21 June 2022',
      invoiceto: 'Joseph Collins',
      amount: '$4800',
      dueDate: '28 June 2022',
      status: 'Paid',
      user: 'avatar-01',
    },
    {
      s_no: 5,
      idno: 'INV005',
      category: 'Software',
      createdOn: '23 June 2022',
      invoiceto: 'Jennifer Floyd',
      amount: '$6200',
      dueDate: '30 June 2022',
      status: 'Cancelled',
      user: 'avatar-07',
    },
    {
      s_no: 6,
      idno: 'INV006',
      category: 'Repairs',
      createdOn: '26 June 2022',
      invoiceto: 'Leatha Bailey',
      amount: '$3200',
      dueDate: '30 June 2022',
      status: 'Paid',
      user: 'avatar-08',
    },
    {
      s_no: 7,
      idno: 'INV007',
      category: 'Food',
      createdOn: '27 June 2022',
      invoiceto: 'Alex Canpbell',
      amount: '$4300',
      dueDate: '30 June 2022',
      status: 'Overdue',
      user: 'avatar-09',
    },
    {
      s_no: 8,
      idno: 'INV008',
      category: 'Marketing',
      createdOn: '30 June 2022',
      invoiceto: 'Marie Canales',
      amount: '$6200',
      dueDate: '05 July 2022',
      status: 'Paid',
      user: 'avatar-11',
    },
  ];
  paidInvoices = [
    {
      id: 1,
      idno: 'INV001',
      category: 'Software',
      createdOn: '16 June 2022',
      invoiceto: 'Barbara Moore',
      amount: '$5200',
      paidOn: '23 June 2022',
      status: 'Paid',
    },
    {
      id: 2,
      idno: 'INV002',
      category: 'Food',
      createdOn: '18 June 2022',
      invoiceto: 'Karlene Chaidez',
      amount: '$3800',
      paidOn: '24 June 2022',
      status: 'Paid',
    },
    {
      id: 3,
      idno: 'INV003',
      category: 'Marketing',
      createdOn: '20 June 2022',
      invoiceto: 'Russell Copeland',
      amount: '$1800',
      paidOn: '26 June 2022',
      status: 'Paid',
    },
    {
      id: 4,
      idno: 'INV004',
      category: 'Repairs',
      createdOn: '21 June 2022',
      invoiceto: 'Joseph Collins',
      amount: '$4800',
      paidOn: '28 June 2022',
      status: 'Paid',
    },
    {
      id: 5,
      idno: 'INV005',
      category: 'Software',
      createdOn: '23 June 2022',
      invoiceto: 'Jennifer Floyd',
      amount: '$6200',
      paidOn: '30 June 2022',
      status: 'Paid',
    },
    {
      id: 6,
      idno: 'INV006',
      category: 'Repairs',
      createdOn: '26 June 2022',
      invoiceto: 'Leatha Bailey',
      amount: '$3200',
      paidOn: '30 June 2022',
      status: 'Paid',
    },
    {
      id: 7,
      idno: 'INV007',
      category: 'Food',
      createdOn: '27 June 2022',
      invoiceto: 'Alex Canpbell',
      amount: '$4300',
      paidOn: '30 June 2022',
      status: 'Paid',
    },
    {
      id: 8,
      idno: 'INV008',
      category: 'Marketing',
      createdOn: '30 June 2022',
      invoiceto: 'Marie Canales',
      amount: '$6200',
      paidOn: '05 July 2022',
      status: 'Paid',
    },
  ];
  overdueInvoices = [
    {
      id: 1,
      idno: 'INV001',
      createdOn: '16 June 2022',
      invoiceto: 'Barbara Moore',
      amount: '$5200',
      lastDate: '23 June 2022',
      status: 'overdue 7 days',
    },
    {
      id: 2,
      idno: 'INV002',
      createdOn: '18 June 2022',
      invoiceto: 'Karlene Chaidez',
      amount: '$3800',
      lastDate: '24 June 2022',
      status: 'overdue 6 days',
    },
    {
      id: 3,
      idno: 'INV003',
      createdOn: '20 June 2022',
      invoiceto: 'Russell Copeland',
      amount: '$1800',
      lastDate: '26 June 2022',
      status: 'overdue 6 days',
    },
    {
      id: 4,
      idno: 'INV004',
      createdOn: '21 June 2022',
      invoiceto: 'Joseph Collins',
      amount: '$4800',
      lastDate: '28 June 2022',
      status: 'overdue 7 days',
    },
    {
      id: 5,
      idno: 'INV005',
      createdOn: '23 June 2022',
      invoiceto: 'Jennifer Floyd',
      amount: '$6200',
      lastDate: '29 June 2022',
      status: 'overdue 6 days',
    },
    {
      id: 6,
      idno: 'INV006',
      createdOn: '26 June 2022',
      invoiceto: 'Leatha Bailey',
      amount: '$3200',
      lastDate: '30 June 2022',
      status: 'overdue 4 days',
    },
    {
      id: 7,
      idno: 'INV007',
      createdOn: '27 June 2022',
      invoiceto: 'Alex Canpbell',
      amount: '$4300',
      lastDate: '30 June 2022',
      status: 'overdue 3 days',
    },
    {
      id: 8,
      idno: 'INV008',
      createdOn: '30 June 2022',
      invoiceto: 'Marie Canales',
      amount: '$6200',
      lastDate: '05 July 2022',
      status: 'overdue 5 days',
    },
  ];
  draftInvoices = [
    {
      id: 1,
      createdOn: '16 June 2022',
      invoiceto: 'Barbara Moore',
      amount: '$5200',
    },
    {
      id: 2,
      createdOn: '18 June 2022',
      invoiceto: 'Karlene Chaidez',
      amount: '$3800',
    },
    {
      id: 3,
      createdOn: '20 June 2022',
      invoiceto: 'Russell Copeland',
      amount: '$1800',
    },
    {
      id: 4,
      createdOn: '21 June 2022',
      invoiceto: 'Joseph Collins',
      amount: '$4800',
    },
    {
      id: 5,
      createdOn: '23 June 2022',
      invoiceto: 'Jennifer Floyd',
      amount: '$6200',
    },
    {
      id: 6,
      createdOn: '26 June 2022',
      invoiceto: 'Leatha Bailey',
      amount: '$3200',
    },
    {
      id: 7,
      createdOn: '27 June 2022',
      invoiceto: 'Alex Canpbell',
      amount: '$4300',
    },
    {
      id: 8,
      createdOn: '30 June 2022',
      invoiceto: 'Marie Canales',
      amount: '$6200',
    },
  ];
  recurringInvoices = [
    {
      id: 1,
      idno: 'INV001',
      createdOn: '16 June 2022',
      invoiceto: 'Barbara Moore',
      amount: '$5200',
      lastInvoice: '23 June 2022',
      nextInvoice: '28 June 2022',
      frequency: '14 Months',
      status: 'Active',
    },
    {
      id: 2,
      idno: 'INV002',
      createdOn: '18 June 2022',
      invoiceto: 'Karlene Chaidez',
      amount: '$3800',
      lastInvoice: '18 June 2022',
      nextInvoice: '20 June 2022',
      frequency: '12 Months',
      status: 'Expired',
    },
    {
      id: 3,
      idno: 'INV003',
      createdOn: '20 June 2022',
      invoiceto: 'Russell Copeland',
      amount: '$1800',
      lastInvoice: '10 June 2022',
      nextInvoice: '18 June 2022',
      frequency: '08 Months',
      status: 'Active',
    },
    {
      id: 4,
      idno: 'INV004',
      createdOn: '21 June 2022',
      invoiceto: 'Joseph Collins',
      amount: '$4800',
      lastInvoice: '15 June 2022',
      nextInvoice: '22 June 2022',
      frequency: '10 Months',
      status: 'Expired',
    },
    {
      id: 5,
      idno: 'INV005',
      createdOn: '23 June 2022',
      invoiceto: 'Jennifer Floyd',
      amount: '$6200',
      lastInvoice: '20 June 2022',
      nextInvoice: '24 June 2022',
      frequency: '04 Months',
      status: 'Active',
    },
    {
      id: 6,
      idno: 'INV006',
      createdOn: '26 June 2022',
      invoiceto: 'Leatha Bailey',
      amount: '$3200',
      lastInvoice: '23 June 2022',
      nextInvoice: '26 June 2022',
      frequency: '06 Months',
      status: 'Expired',
    },
    {
      id: 1,
      idno: 'INV007',
      createdOn: '27 June 2022',
      invoiceto: 'Alex Canpbell',
      amount: '$4300',
      lastInvoice: '15 June 2022',
      nextInvoice: '25 June 2022',
      frequency: '08 Months',
      status: 'Active',
    },
    {
      id: 1,
      idno: 'INV008',
      createdOn: '30 June 2022',
      invoiceto: 'Marie Canales',
      amount: '$6200',
      lastInvoice: '09 June 2022',
      nextInvoice: '19 June 2022',
      frequency: '04 Months',
      status: 'Expired',
    },
  ];
  cancelledInvoices = [
    {
      s_no: 1,
      idno: 'INV001',
      createdOn: '16 June 2022',
      invoiceto: 'Barbara Moore',
      amount: '$5200',
      cancelledOn: '23 June 2022',
    },
    {
      s_no: 2,
      idno: 'INV002',
      createdOn: '18 June 2022',
      invoiceto: 'Karlene Chaidez',
      amount: '$3800',
      cancelledOn: '24 June 2022',
    },
    {
      s_no: 3,
      idno: 'INV003',
      createdOn: '20 June 2022',
      invoiceto: 'Russell Copeland',
      amount: '$1800',
      cancelledOn: '26 June 2022',
    },
    {
      s_no: 4,
      idno: 'INV004',
      createdOn: '21 June 2022',
      invoiceto: 'Joseph Collins',
      amount: '$4800',
      cancelledOn: '28 June 2022',
    },
    {
      s_no: 5,
      idno: 'INV005',
      createdOn: '23 June 2022',
      invoiceto: 'Jennifer Floyd',
      amount: '$6200',
      cancelledOn: '29 June 2022',
    },
    {
      s_no: 6,
      idno: 'INV006',
      createdOn: '26 June 2022',
      invoiceto: 'Leatha Bailey',
      amount: '$3200',
      cancelledOn: '30 June 2022',
    },
    {
      s_no: 7,
      idno: 'INV007',
      createdOn: '27 June 2022',
      invoiceto: 'Alex Canpbell',
      amount: '$4300',
      cancelledOn: '30 June 2022',
    },
    {
      s_no: 8,
      idno: 'INV008',
      createdOn: '30 June 2022',
      invoiceto: 'Marie Canales',
      amount: '$6200',
      cancelledOn: '05 July 2022',
    },
  ];
  public socialLinks = [
    {
      icon: 'facebook',
      placeholder: 'https://www.facebook.com'
    },
    {
      icon: 'twitter',
      placeholder: 'https://www.twitter.com'
    },
    {
      icon: 'youtube',
      placeholder: 'https://www.youtube.com'
    },
    {
      icon: 'linkedin',
      placeholder: 'https://www.linkedin.com'
    }
  ];
  feesCollection = [
    {
      id: 1,
      idNo: 'PRE1234',
      name: 'Nathan Humphries',
      gender: 'Male',
      feesType: 'Exam Fees',
      amount: '278',
      paidDate: '17 Nov 2020',
      status: 'Paid',
    },
    {
      id: 2,
      idNo: 'PRE1252',
      name: 'Joe Kelly',
      gender: 'Female',
      feesType: 'Transport Fees',
      amount: '237',
      paidDate: '17 Oct 2020',
      status: 'Paid',
    },
    {
      id: 3,
      idNo: 'PRE1434',
      name: 'Vincent',
      gender: 'Male',
      feesType: 'Mess Fees',
      amount: '567',
      paidDate: '05 Nov 2020',
      status: 'Paid',
    },
    {
      id: 4,
      idNo: 'PRE1534',
      name: 'Lois A',
      gender: 'Male',
      feesType: 'Exam Fees',
      amount: '56',
      paidDate: '02 Oct 2020',
      status: 'Unpaid',
    },
    {
      id: 5,
      idNo: 'PRE2143',
      name: 'Levell Scott',
      gender: 'Male',
      feesType: 'Exam Fees',
      amount: '378',
      paidDate: '04 Sept 2020',
      status: 'Paid',
    },
    {
      id: 6,
      idNo: 'PRE2153',
      name: 'Calvin',
      gender: 'Male',
      feesType: 'Exam Fees',
      amount: '236',
      paidDate: '28 Oct 2020',
      status: 'Unpaid',
    },
    {
      id: 7,
      idNo: 'PRE2209',
      name: 'Aaliyah',
      gender: 'Female',
      feesType: 'Mess Fees',
      amount: '120',
      paidDate: '17 Aug 2020',
      status: 'Paid',
    },
    {
      id: 8,
      idNo: 'PRE2213',
      name: 'Malynne',
      gender: 'Female',
      feesType: 'Class Test',
      amount: '56',
      paidDate: '05 Aug 2020',
      status: 'Paid',
    },
    {
      id: 9,
      idNo: 'PRE2345',
      name: 'Kozma Tatari',
      gender: 'Female',
      feesType: 'Exam Test',
      amount: '564',
      paidDate: '12 Nov 2020',
      status: 'Paid',
    },
  ];
  expensesList = [
    {
      id: 1,
      idNo: 'PRE1252',
      itemName: 'Water Bottle',
      itemQuality: '267',
      amount: '237',
      purchaseSource: 'DJ Stationary',
      purchaseDate: '17 Oct 2020',
      purchaseBy: 'Joe Kelley',
    },
    {
      id: 2,
      idNo: 'PRE1534',
      itemName: 'Hard disk',
      itemQuality: '2',
      amount: '560',
      purchaseSource: 'Sony Center',
      purchaseDate: '02 Oct 2020',
      purchaseBy: 'Lois A',
    },
    {
      id: 3,
      idNo: 'PRE1536',
      itemName: 'Hard disk',
      itemQuality: '3',
      amount: '560',
      purchaseSource: 'music Center',
      purchaseDate: '02 Oct 2020',
      purchaseBy: 'Lois A',
    },
    {
      id: 4,
      idNo: 'PRE2143',
      itemName: 'Desk',
      itemQuality: '6',
      amount: '378',
      purchaseSource: 'Take Away',
      purchaseDate: '04 Sept 2020',
      purchaseBy: 'Levell Scott',
    },
    {
      id: 5,
      idNo: 'PRE2153',
      itemName: 'Note books',
      itemQuality: '100',
      amount: '236',
      purchaseSource: 'DJ Stationary',
      purchaseDate: '28 Oct 2020',
      purchaseBy: 'Calvin',
    },
    {
      id: 6,
      idNo: 'PRE2209',
      itemName: 'Chair',
      itemQuality: '6',
      amount: '120',
      purchaseSource: 'Abc Shop',
      purchaseDate: '	17 Aug 2020',
      purchaseBy: 'Lois',
    },
    {
      id: 7,
      idNo: 'PRE2213',
      itemName: 'Table',
      itemQuality: '2',
      amount: '56',
      purchaseSource: 'Online',
      purchaseDate: '05 Aug 2020',
      purchaseBy: 'Malynne',
    },
    {
      id: 8,
      idNo: 'PRE2431',
      itemName: 'Projector',
      itemQuality: '1',
      amount: '246',
      purchaseSource: 'Real Shop',
      purchaseDate: '17 Sept 2020',
      purchaseBy: 'Minnie',
    },
  ];
  salaryList = [
    {
      id: 1,
      idNo: 'PRE1234',
      name: 'Nathan Humphries',
      gender: 'Male',
      joiningDate: '	17 Nov 2020',
      amount: '278',
      status: 'Paid',
    },
    {
      id: 2,
      idNo: 'PRE1252',
      name: 'Joe Kelly',
      gender: 'Female',
      joiningDate: '	17 Oct 2020',
      amount: '237',
      status: 'Paid',
    },
    {
      id: 3,
      idNo: 'PRE1434',
      name: 'Vincent',
      gender: 'Male',
      joiningDate: '05 Nov 2020',
      amount: '567',
      status: 'Paid',
    },
    {
      id: 4,
      idNo: 'PRE1534',
      name: 'Lois A',
      gender: 'Male',
      joiningDate: '02 Oct 2020',
      amount: '560',
      status: 'Unpaid',
    },
    {
      id: 5,
      idNo: 'PRE2143',
      name: 'Levell Scott',
      gender: 'Male',
      joiningDate: '04 Sept 2020',
      amount: '378',
      status: 'Paid',
    },
    {
      id: 6,
      idNo: 'PRE2153',
      name: 'Calvin',
      gender: 'Male',
      joiningDate: '28 Oct 2020',
      amount: '236',
      status: 'Unpaid',
    },
    {
      id: 7,
      idNo: 'PRE2209',
      name: 'Aaliyah',
      gender: 'Female',
      joiningDate: '	17 Aug 2020',
      amount: '320',
      status: 'Paid',
    },
    {
      id: 8,
      idNo: 'PRE2213',
      name: 'Malynne',
      gender: 'Female',
      joiningDate: '05 Aug 2020',
      amount: '536',
      status: 'Paid',
    },
    {
      id: 9,
      idNo: 'PRE2345',
      name: 'Kozma Tatari',
      gender: 'Female',
      joiningDate: '12 Nov 2020',
      amount: '564',
      status: 'Paid',
    },
    {
      id: 10,
      idNo: 'PRE2365',
      name: 'John Chambers',
      gender: 'Male',
      joiningDate: '15 Nov 2020',
      amount: '234',
      status: 'Paid',
    },
    {
      id: 11,
      idNo: 'PRE2431',
      name: 'Minnie',
      gender: 'Female',
      joiningDate: '17 Sept 2020',
      amount: '246',
      status: 'Unpaid',
    },
  ];
  holidayList = [
    {
      id: 1,
      idNo: 'PRE2143',
      holidayName: 'Annual Day',
      type: 'College Holiday',
      startDate: '04 Sept 2020',
      endDate: '07 Sept 2020',
    },
    {
      id: 2,
      idNo: 'PRE2143',
      holidayName: 'Annual Day',
      type: 'College Holiday',
      startDate: '04 Sept 2020',
      endDate: '07 Sept 2020',
    },
    {
      id: 3,
      idNo: 'PRE2209',
      holidayName: 'Sports Day',
      type: 'College Holiday',
      startDate: '	17 Aug 2020',
      endDate: '	19 Aug 2020',
    },
    {
      id: 4,
      idNo: 'PRE2209',
      holidayName: 'Sports Day',
      type: 'College Holiday',
      startDate: '	17 Aug 2020',
      endDate: '	19 Aug 2020',
    },
    {
      id: 5,
      idNo: 'PRE2213',
      holidayName: 'Memorial Day',
      type: 'Public Holiday',
      startDate: '05 Aug 2020',
      endDate: '06 Aug 2020',
    },
    {
      id: 6,
      idNo: 'PRE2213',
      holidayName: 'Memorial Day',
      type: 'Public Holiday',
      startDate: '05 Aug 2020',
      endDate: '06 Aug 2020',
    },
    {
      id: 7,
      idNo: 'PRE2431',
      holidayName: 'Exam Holiday',
      type: 'Semester leave',
      startDate: '17 Sept 2020',
      endDate: '30 Sept 2020',
    },
    {
      id: 8,
      idNo: 'PRE2431',
      holidayName: 'Exam Holiday',
      type: 'Semester leave',
      startDate: '17 Sept 2020',
      endDate: '30 Sept 2020',
    },
  ];
  feesList = [
    {
      id: 1,
      idNo: 'PRE1234',
      feesName: 'Class Test Fees',
      class: '5',
      amount: '242',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 2,
      idNo: 'PRE1434',
      feesName: 'Sports Day Fees',
      class: '6',
      amount: '341',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 3,
      idNo: 'PRE1534',
      feesName: 'Exam Fees',
      class: '7',
      amount: '265',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 4,
      idNo: 'PRE2143',
      feesName: 'Exam Fees',
      class: '9',
      amount: '545',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 5,
      idNo: 'PRE2153',
      feesName: 'Sports Day Fees',
      class: '2',
      amount: '334',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 6,
      idNo: 'PRE2209',
      feesName: 'Exam Fees',
      class: '10',
      amount: '345',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 7,
      idNo: 'PRE2213',
      feesName: 'Exam Fees',
      class: '1',
      amount: '255',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 8,
      idNo: 'PRE2345',
      feesName: 'Exam Fees',
      class: '12',
      amount: '365',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 9,
      idNo: 'PRE2365',
      feesName: 'Annual Day Fees',
      class: '11',
      amount: '83',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
    {
      id: 10,
      idNo: 'PRE2431',
      feesName: 'Sports Day Fees',
      class: '8',
      amount: '234',
      startDate: '23 Apr 2020',
      endDate: '28 Apr 2020',
    },
  ];
  examList = [
    {
      id: 1,
      examName: 'Class Test',
      class: '10',
      subject: ' English',
      startTime: '10:00',
      endTime: '01:00',
      date: '23 Apr 2020',
    },
    {
      id: 2,
      examName: 'Class Test',
      class: '8',
      subject: 'Science',
      startTime: '10:00',
      endTime: '04:00',
      date: '18 Sep 2020',
    },
    {
      id: 3,
      examName: 'Class Test',
      class: '2',
      subject: ' 	Biology',
      startTime: '10:00   ',
      endTime: '01:00',
      date: '15 Oct 2020',
    },
    {
      id: 4,
      examName: 'Class Test',
      class: '12',
      subject: ' 	Mathematics',
      startTime: '10:00   ',
      endTime: '01:00',
      date: '23 Apr 2020',
    },
    {
      id: 5,
      examName: 'Half Yearly',
      class: '1',
      subject: 'Botony  ',
      startTime: '10:00   ',
      endTime: '01:00',
      date: '23 Apr 2020',
    },
    {
      id: 6,
      examName: 'Half Yearly',
      class: '6',
      subject: 'Botony  ',
      startTime: '10:00   ',
      endTime: '01:00',
      date: '02 Jun 2020',
    },
    {
      id: 7,
      examName: 'Quaterly',
      class: '9',
      subject: '	Biology  ',
      startTime: '01:00  ',
      endTime: '04:00',
      date: '26 Nov 2020',
    },
    {
      id: 8,
      examName: 'Quaterly',
      class: '7',
      subject: '	History  ',
      startTime: '01:00  ',
      endTime: '04:00',
      date: '23 Jul 2020',
    },
  ];
  timeTable = [
    {
      id: 1,
      idNo: 'PRE1534',
      name: 'Vincent',
      class: '6',
      subject: 'Botony',
      startTime: '10:00',
      endTime: '01:00',
      date: '02 Jun 2020',
    },
    {
      id: 2,
      idNo: 'PRE2009',
      name: 'Lois A',
      class: '7',
      subject: 'History',
      startTime: '01:00',
      endTime: '04:00',
      date: '23 Jul 2020',
    },
    {
      id: 3,
      idNo: 'PRE2143',
      name: 'Minnie',
      class: '8',
      subject: 'Science',
      startTime: '01:00',
      endTime: '04:00',
      date: '18 Sep 2020',
    },
    {
      id: 4,
      idNo: 'PRE2153',
      name: 'Kozma Tatari',
      class: '12',
      subject: 'Mathematics',
      startTime: '10:00',
      endTime: '01:00',
      date: '23 Apr 2020',
    },
    {
      id: 5,
      idNo: 'PRE2213',
      name: 'Levell Scott',
      class: '9',
      subject: 'Biology',
      startTime: '01:00',
      endTime: '04:00',
      date: '26 Nov 2020',
    },
    {
      id: 6,
      idNo: 'PRE2309',
      name: 'Levell Scott',
      class: '9',
      subject: 'Biology',
      startTime: '01:00',
      endTime: '04:00',
      date: '26 Nov 2020',
    },
    {
      id: 7,
      idNo: 'PRE2213',
      name: 'Levell Scott',
      class: '9',
      subject: 'Biology',
      startTime: '01:00',
      endTime: '04:00',
      date: '26 Nov 2020',
    },
    {
      id: 8,
      idNo: 'PRE2009',
      name: 'Lois A',
      class: '7',
      subject: 'History',
      startTime: '01:00',
      endTime: '04:00',
      date: '23 Jul 2020',
    },
  ];
  library = [
    {
      id: 1,
      idNo: 'PRE1534',
      name: 'Acoustics',
      language: 'English',
      department: 'Science',
      class: '10',
      type: 'Book',
      status: 'In Stock',
    },
    {
      id: 2,
      idNo: 'PRE2009',
      name: 'Calculus',
      language: 'English',
      department: 'Mathematics',
      class: '9',
      type: 'Book',
      status: 'In Stock',
    },
    {
      id: 3,
      idNo: 'PRE2143',
      name: 'Chess',
      language: 'English',
      department: 'General',
      class: '7',
      type: 'Book',
      status: 'Out Of Stock',
    },
    {
      id: 4,
      idNo: 'PRE2153',
      name: 'Robotics',
      language: 'English',
      department: 'Science',
      class: '10',
      type: 'Book',
      status: 'Out Of Stock',
    },
    {
      id: 5,
      idNo: 'PRE2209',
      name: 'Acoustics',
      language: 'Geometry',
      department: 'Science',
      class: '8',
      type: 'Book',
      status: 'In Stock',
    },
    {
      id: 6,
      idNo: 'PRE2213',
      name: 'Games',
      language: 'English',
      department: 'General',
      class: '9',
      type: 'Book',
      status: 'In Stock',
    },
    {
      id: 7,
      idNo: 'PRE2309',
      name: 'Acoustics',
      language: 'English',
      department: 'Science',
      class: '10',
      type: 'Book',
      status: 'In Stock',
    },
    {
      id: 8,
      idNo: 'PRE2431',
      name: 'Visual Basic',
      language: 'English',
      department: 'Computer Science',
      class: '11',
      type: 'Book',
      status: 'Out Of Stock',
    },
  ];
  sports = [
    {
      id: 1,
      idNo: 'PRE1534',
      name: '	Hockey',
      coach: 'Thomas',
      startedYear: '2005',
    },
    {
      id: 2,
      idNo: 'PRE2009',
      name: 'Carrom',
      coach: 'Joseph',
      startedYear: '2002',
    },
    {
      id: 3,
      idNo: 'PRE2143',
      name: 'Volleyball',
      coach: 'Thomas',
      startedYear: '2006',
    },
    {
      id: 4,
      idNo: 'PRE2153',
      name: 'Volleyball',
      coach: 'Joseph',
      startedYear: '2003',
    },
    {
      id: 5,
      idNo: 'PRE2209',
      name: 'Cricket',
      coach: 'Jenny',
      startedYear: '2002',
    },
    {
      id: 6,
      idNo: 'PRE2213',
      name: 'Basketball',
      coach: 'Jenny',
      startedYear: '2002',
    },
    {
      id: 7,
      idNo: 'PRE2309',
      name: 'Cricket',
      coach: 'Jenny',
      startedYear: '2002',
    },
    {
      id: 8,
      idNo: 'PRE2431',
      name: 'Football',
      coach: 'Joseph',
      startedYear: '2002',
    },
  ];
  hostel = [
    {
      id: 1,
      block: 'A Block',
      roomNo: '101',
      roomType: 'Medium',
      noOfBeds: '6',
      costPerBed: '10',
      availability: 'Full',
    },
    {
      id: 2,
      block: 'A Block',
      roomNo: '101',
      roomType: 'Medium',
      noOfBeds: '6',
      costPerBed: '10',
      availability: 'Available',
    },
    {
      id: 3,
      block: 'A Block',
      roomNo: '102',
      roomType: 'Medium',
      noOfBeds: '6',
      costPerBed: '10',
      availability: 'Full',
    },
    {
      id: 4,
      block: 'B Block',
      roomNo: '104',
      roomType: 'Big',
      noOfBeds: '8',
      costPerBed: '10',
      availability: 'Full',
    },
    {
      id: 5,
      block: 'A Block',
      roomNo: '107',
      roomType: 'Medium',
      noOfBeds: '6',
      costPerBed: '10',
      availability: 'Available',
    },
    {
      id: 6,
      block: 'A Block',
      roomNo: '108',
      roomType: 'Medium',
      noOfBeds: '6',
      costPerBed: '10',
      availability: 'Available',
    },
    {
      id: 7,
      block: 'B Block',
      roomNo: '102',
      roomType: 'Medium',
      noOfBeds: '6',
      costPerBed: '10',
      availability: '2 Available',
    },
    {
      id: 8,
      block: 'B Block',
      roomNo: '107',
      roomType: 'Small',
      noOfBeds: '6',
      costPerBed: '10',
      availability: 'Available',
    },
  ];
  transport = [
    {
      id: 1,
      routeName: 'New Cross',
      vehicleNumber: 'TN 43 AS 5263',
      driverName: 'Steve',
      driverLicense: 'REDH968532',
      contactNumber: '+91 8974158962',
      driverAddress: '152, South Pole, 2nd Street, 3rd Cross',
    },
    {
      id: 2,
      routeName: 'North Pole',
      vehicleNumber: 'TN 34 DB 5847',
      driverName: 'Akbar',
      driverLicense: 'RGTH958932',
      contactNumber: '+91 8596841252',
      driverAddress: '253, 2nd Street, 3rd Crosst',
    },
    {
      id: 3,
      routeName: 'South Wales',
      vehicleNumber: 'TN 34 AK 6789',
      driverName: 'Joseph',
      driverLicense: 'DLFH985632',
      contactNumber: '+91 9658741526',
      driverAddress: '741, East Road, 2nd Street',
    },
  ];
  social = [
    {
      id: 1,
      icon: 'facebook',
    },
    {
      id: 2,
      icon: 'twitter',
    },
    {
      id: 3,
      icon: 'youtube',
    },
    {
      id: 4,
      icon: 'linkedin',
    },
    {
      id: 5,
      icon: 'github',
    },
  ];
  defaultData = [
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: '33',
      startdate: '2008/11/28',
      salary: '$162,700',
    },
    {
      name: 'Angelica Ramos',
      position: 'Chief Executive Officer (CEO)',
      office: 'London',
      age: '47',
      startdate: '2009/10/09',
      salary: '$1,200,000',
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: '66',
      startdate: '2009/01/12',
      salary: '$86,000',
    },
    {
      name: 'Bradley Greer',
      position: 'Software Engineer',
      office: 'London',
      age: '41',
      startdate: '2012/10/13',
      salary: '$132,000',
    },
    {
      name: 'Brenden Wagner',
      position: 'Software Engineer',
      office: 'San Francisco',
      age: '28',
      startdate: '2011/06/07',
      salary: '$206,850',
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: '61',
      startdate: '2012/12/02',
      salary: '$372,000',
    },
    {
      name: 'Caesar Vance',
      position: 'Pre-Sales Support',
      office: 'New York',
      age: '21',
      startdate: '2011/12/12',
      salary: '$106,450',
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: '22',
      startdate: '2012/03/29',
      salary: '$433,060',
    },
    {
      name: 'Charde Marshall',
      position: 'Regional Director',
      office: 'San Francisco',
      age: '36',
      startdate: '2008/10/16',
      salary: '$470,600',
    },
    {
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      office: 'San Francisco',
      age: '39',
      startdate: '2009/09/15',
      salary: '$205,500',
    },
    {
      name: 'Dai Rios',
      position: 'Personnel Lead',
      office: 'Edinburgh',
      age: '35',
      startdate: '2012/09/26',
      salary: '$217,500',
    },
    {
      name: 'Doris Wilder',
      position: 'Sales Assistant',
      office: 'Sidney',
      age: '23',
      startdate: '2010/09/20',
      salary: '$85,600',
    },
    {
      name: 'Fiona Green',
      position: 'Chief Operating Officer (COO)',
      office: 'San Francisco',
      age: '48',
      startdate: '2010/03/11',
      salary: '$850,000',
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: '63',
      startdate: '2011/07/25',
      salary: '$170,750',
    },
    {
      name: 'Gavin Joyce',
      position: 'Developer',
      office: 'Edinburgh',
      age: '42',
      startdate: '2010/12/22',
      salary: '$92,575',
    },
    {
      name: 'Gloria Little',
      position: 'Systems Administrator',
      office: 'New York',
      age: '59',
      startdate: '2009/04/10',
      salary: '$237,500',
    },
    {
      name: 'Haley Kennedy',
      position: 'Senior Marketing Designer',
      office: 'London',
      age: '43',
      startdate: '2012/12/18',
      salary: '$313,500',
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      age: '59',
      startdate: '2012/08/06',
      salary: '$137,500',
    },
    {
      name: 'Jena Gaines',
      position: 'Office Manager',
      office: 'London',
      age: '30',
      startdate: '2008/12/19',
      salary: '$90,560',
    },
    {
      name: 'Jenette Caldwell',
      position: 'Development Lead',
      office: 'New York',
      age: '30',
      startdate: '2011/09/03',
      salary: '$345,000',
    },
    {
      name: 'Jennifer Chang',
      position: 'Regional Director',
      office: 'Singapore',
      age: '28',
      startdate: '2010/11/14',
      salary: '$357,650',
    },
    {
      name: 'Michael Silva',
      position: 'Marketing Designer',
      office: 'London',
      age: '66',
      startdate: '2012/11/27',
      salary: '$198,500',
    },
    {
      name: 'Paul Byrd',
      position: 'Chief Financial Officer (CFO)',
      office: 'New York',
      age: '64',
      startdate: '2010/06/09',
      salary: '$725,000',
    },
    {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      office: 'Edinburgh',
      age: '22',
      startdate: '2013/03/03',
      salary: '$342,000',
    },
    {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      age: '55',
      startdate: '2010/10/14',
      salary: '$327,900',
    },
    {
      name: 'Shou Itou',
      position: 'Regional Marketing',
      office: 'Tokyo',
      age: '20',
      startdate: '2011/08/14',
      salary: '$163,000',
    },
    {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      office: 'Edinburgh',
      age: '23',
      startdate: '2008/12/13',
      salary: '$103,600',
    },
    {
      name: 'Tatyana Fitzpatrick',
      position: 'Regional Director',
      office: 'London',
      age: '19',
      startdate: '2010/03/17',
      salary: '$385,750',
    },
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      startdate: '2011/04/25',
      salary: '$320,800',
    },
    {
      name: 'Yuri Berry',
      position: 'Chief Marketing Officer (CMO)',
      office: 'New York',
      age: '40',
      startdate: '2009/06/25',
      salary: '$675,000',
    },
  ];
  blogs = [
    {
      id: 1,
      imgs: 'assets/img/category/blog-1.jpg',
      eyes: '225',
      img2: 'assets/img/profiles/avatar-12.jpg',
      names: 'Alex Campbell',
      date: '4 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 2,
      imgs: 'assets/img/category/blog-2.jpg',
      eyes: '132',
      img2: 'assets/img/profiles/avatar-04.jpg',
      names: 'Barbara Moore',
      date: '5 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 3,
      imgs: 'assets/img/category/blog-3.jpg',
      eyes: '855',
      img2: 'assets/img/profiles/avatar-04.jpg',
      names: 'Brian Johnson',
      date: '4 Aug 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 4,
      imgs: 'assets/img/category/blog-4.jpg',
      eyes: '555',
      img2: 'assets/img/profiles/avatar-05.jpg',
      names: 'Greg Lynch',
      date: '4 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 5,
      imgs: 'assets/img/category/blog-5.jpg',
      eyes: '755',
      img2: 'assets/img/profiles/avatar-11.jpg',
      names: 'Jennifer Floyd',
      date: '11 Sep 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 6,
      imgs: 'assets/img/category/blog-6.jpg',
      eyes: '85',
      img2: 'assets/img/profiles/avatar-06.jpg',
      names: 'Karlene Chaidez',
      date: '4 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
  ];
  public ManageUsers3: BehaviorSubject<Array<blogs>> = new BehaviorSubject(
    this.blogs
  );
  pendings = [
    {
      id: 1,
      imgs: 'assets/img/category/blog-6.jpg',
      eyes: '225',
      img2: 'assets/img/profiles/avatar-11.jpg',
      names: 'Greg Lynch',
      date: '4 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 2,
      imgs: 'assets/img/category/blog-5.jpg',
      eyes: '132',
      img2: 'assets/img/profiles/avatar-05.jpg',
      names: 'Jennifer Floyd',
      date: '5 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 3,
      imgs: 'assets/img/category/blog-4.jpg',
      eyes: '855',
      img2: 'assets/img/profiles/avatar-04.jpg',
      names: 'Barbara Moore',
      date: '4 Aug 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 4,
      imgs: 'assets/img/category/blog-3.jpg',
      eyes: '555',
      img2: 'assets/img/profiles/avatar-03.jpg',
      names: 'Alex Campbell',
      date: '4 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 5,
      imgs: 'assets/img/category/blog-2.jpg',
      eyes: '755',
      img2: 'assets/img/profiles/avatar-10.jpg',
      names: 'Brian Johnson',
      date: '11 Sep 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 6,
      imgs: 'assets/img/category/blog-1.jpg',
      eyes: '85',
      img2: 'assets/img/profiles/avatar-07.jpg',
      names: 'Karlene Chaidez',
      date: '4 Dec 2022',
      para: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      para2:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.',
    },
  ];
  public ManageUsers1: BehaviorSubject<Array<blogs>> = new BehaviorSubject(
    this.pendings
  );
  grids = [
    {
      id: 1,
      images: 'assets/img/profiles/avatar-03.jpg',
      username: 'Malynne',
      details: 'student',
    },
    {
      id: 2,
      images: 'assets/img/profiles/avatar-04.jpg',
      username: 'Levell Scott',
      details: 'student',
    },
    {
      id: 3,
      images: 'assets/img/profiles/avatar-05.jpg',
      username: 'Minnie',
      details: 'student',
    },
    {
      id: 4,
      images: 'assets/img/profiles/avatar-06.jpg',
      username: 'Lois A',
      details: 'student',
    },
    {
      id: 5,
      images: 'assets/img/profiles/avatar-07.jpg',
      username: 'Calvin',
      details: 'student',
    },
    {
      id: 6,
      images: 'assets/img/profiles/avatar-08.jpg',
      username: 'Charles Dickens',
      details: 'student',
    },
    {
      id: 6,
      images: 'assets/img/profiles/avatar-09.jpg',
      username: 'Joe Kelley',
      details: 'student',
    },
    {
      id: 6,
      images: 'assets/img/profiles/avatar-10.jpg',
      username: 'Malynne',
      details: 'student',
    },
  ];
  public ManageUsers2: BehaviorSubject<Array<grids>> = new BehaviorSubject(
    this.grids
  );
  teachgrids = [
    {
      id: 1,
      images: 'assets/img/profiles/avatar-05.jpg',
      username: 'Malynne',
      details: 'Teacher',
    },
    {
      id: 2,
      images: 'assets/img/profiles/avatar-03.jpg',
      username: 'Levell Scott',
      details: 'Teacher',
    },
    {
      id: 3,
      images: 'assets/img/profiles/avatar-07.jpg',
      username: 'Minnie',
      details: 'Teacher',
    },
    {
      id: 4,
      images: 'assets/img/profiles/avatar-04.jpg',
      username: 'Lois A',
      details: 'Teacher',
    },
    {
      id: 5,
      images: 'assets/img/profiles/avatar-06.jpg',
      username: 'Calvin',
      details: 'Teacher',
    },
    {
      id: 6,
      images: 'assets/img/profiles/avatar-10.jpg',
      username: 'Charles Dickens',
      details: 'Teacher',
    },
    {
      id: 6,
      images: 'assets/img/profiles/avatar-08.jpg',
      username: 'Joe Kelley',
      details: 'Teacher',
    },
    {
      id: 6,
      images: 'assets/img/profiles/avatar-09.jpg',
      username: 'Malynne',
      details: 'Teacher',
    },
  ];
  events = [
    { id: 1, title: 'event 1', date: '2020-12-01', className: 'bg-purple' },
    { id: 2, title: 'event 2', date: '2020-12-17', className: 'bg-success' },
  ];

  public resetData(): void {
    // reset sidebar data
    this.sideBar.splice(5, 1);
    this.sideBar.splice(4, 1);
    this.sideBar.splice(3, 1);
  }
}

export interface data {
  id: number;
  routeName: string;
  vehicleNumber: string;
  driverName: string;
  driverLicense: string;
  contactNumber: string;
  driverAddress: string;
}
export interface timetabledata {
  id: number;
  idNo: string;
  name: string;
  class: string;
  subject: string;
  startTime: string;
  endTime: string;
  date: string;
}
export interface teachersList {
  id: number;
  idNo: string;
  name: string;
  class: string;
  gender: string;
  subject: string;
  section: string;
  mobileNumber: string;
  address: string;
}
export interface teachgrids {
  id: number;
  images: string;
  username: string;
  details: string;
}
export interface defaultData {
  name: string;
  position: string;
  office: string;
  age: string;
  startdate: string;
  salary: string;
}

export interface subjectsList {
  id: number;
  idNo: string;
  name: string;
  class: string;
}

export interface studentsList {
  id: number;
  idNo: string;
  name: string;
  class: string;
  dob: string;
  parentName: string;
  mobileNumber: string;
  address: string;
}
export interface grids {
  id: number;
  images: string;
  username: string;
  details: string;
}
export interface sports {
  id: number;
  idNo: string;
  name: string;
  coach: string;
  startedYear: string;
}
export interface social {
  id: number;
  icon: string;
}

export interface library {
  id: number;
  idNo: string;
  name: string;
  language: string;
  department: string;
  class: string;
  type: string;
  status: string;
}
export interface recurringInvoices {
  id: number;
  idno: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  lastInvoice: string;
  nextInvoice: string;
  frequency: string;
  status: string;
}
export interface paidInvoices {
  id: number;
  idno: string;
  category: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  paidOn: string;
  status: string;
}
export interface overdueInvoices {
  id: number;
  idno: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  lastDate: string;
  status: string;
}
export interface invoicesList {
  s_no: number;
  idno: string;
  category: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  dueDate: string;
  status: string;
  user: string;
}
export interface draftInvoices {
  id: number;
  createdOn: string;
  invoiceto: string;
  amount: string;
}

export interface cancelledInvoices {
  s_no: number;
  idno: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  cancelledOn: string;
}

export interface hostel {
  id: number;
  block: string;
  roomNo: string;
  roomType: string;
  noOfBeds: string;
  costPerBed: string;
  availability: string;
}

export interface holidayList {
  id: number;
  idNo: string;
  holidayName: string;
  type: string;
  startDate: string;
  endDate: string;
}

export interface feesList {
  id: number;
  idNo: string;
  feesName: string;
  class: string;
  amount: string;
  startDate: string;
  endDate: string;
}
export interface examList {
  id: number;
  examName: string;
  class: string;
  subject: string;
  startTime: string;
  endTime: string;
  date: string;
}
export interface departmentsList {
  id: number;
  idNo: string;
  name: string;
  hod: string;
  startedYear: string;
  noOfStudents: string;
}
export interface blogs {
  id: number;
  imgs: string;
  eyes: string;
  img2: string;
  names: string;
  date: string;
  para: string;
  para2: string;
}

export interface salaryList {
  id: number;
  idNo: string;
  name: string;
  gender: string;
  joiningDate: string;
  amount: string;
  status: string;
}

export interface feesCollection {
  id: number;
  idNo: string;
  name: string;
  gender: string;
  feesType: string;
  amount: string;
  paidDate: string;
  status: string;
}
export interface expensesList {
  id: number;
  idNo: string;
  itemName: string;
  itemQuality: string;
  amount: string;
  purchaseSource: string;
  purchaseDate: string;
  purchaseBy: string;
}
