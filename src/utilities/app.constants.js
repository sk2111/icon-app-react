//auth setimeouts
export const LOADING_ANIM_LOGO_TIME = 1000; // 1 second
export const SIGNOUT_ANIMATION_LOADING_TIME = 1500; // 1.5 second
export const LOADING_PERSISTANT_CHECK_TIME = 1000; // 1 sec

//placeholder text to show in home header inputs
export const COMMON_ICONS_INPUT_PLACEHOLDER = 'Search for common icons';
export const PROJECT_ICONS_INPUT_PLACEHOLDER = 'Search for your project icons';
export const FAVORITES_ICONS_INPUT_PLACEHOLDER = 'Search for your favorites icons';
//select label text
export const COMMON_ICONS_SELECT_LABEL = 'Categories';
export const PROJECT_ICONS_SELECT_LABEL = 'Projects';

//default select value for common icons in display UI
export const DEFAULT_CLASSIFICATION_VALUE_FOR_UPLOADED_ICONS = 'All';
export const COMMON_ICON_DEFAULT_CATEGORY_VALUE = 'All';
export const PROJECT_ICON_DEFAULT_PROJECT_VALUE = 'All';
export const UPLOAD_ICONS_DEFAULT_CLASSIFICATION = 'Not Selected';

// Page Names to display in Icon view header
export const COMMON_ICONS_HEADER_LABEL = "Common Icons";
export const PROJECT_ICONS_HEADER_LABEL = "Project Icons";
export const FAVORITES_ICONS_HEADER_LABEL = "Favorites Icons";
export const EDIT_ICON_HEADER_LABEL = "Edit Icon";

// root classification in upload lebel map
export const UPLOAD_ROOT_SELECT_LABEL = {
    [COMMON_ICONS_HEADER_LABEL]: COMMON_ICONS_SELECT_LABEL,
    [PROJECT_ICONS_HEADER_LABEL]: PROJECT_ICONS_SELECT_LABEL
};
//saga message constants
export const SAGA_FETCH_USER_OPTIONS_ERROR_MESSAGE = 'Failed to fetch user options for common or project icons';
export const SAGA_UPLOAD_ICONS_INVALID_CLASSIFICATION_ERROR_MESSAGE = 'Upload failed...Invalid Icon classification found';

//FIle upload Max limi
export const MAXIMUM_NUMBER_OF_FILES_FOR_UPLOAD = 150;
// Icon read maixmium limit at a time
export const MAXIMUM_NUMBER_OF_FILES_FOR_DOWNLOAD = 50;
export const NUMBER_OF_LAZY_LOAD_ICONS_TO_DISPLAY = 15;
export const FETCHING_ICONS_THROTTLE_TIME = 1000; //1sec
//Upload Modal view constants
export const MODAL_IN_UPLOAD_VIEW = 'MODAL_IN_UPLOAD_VIEW';
export const MODAL_IN_CONFIGURE_VIEW = 'MODAL_IN_CONFIGURE_VIEW';
//upload Icon property constants
export const ICON_PROP = {
    ICON_ID: 'id',
    ICON_NAME: 'iconName',
    ICON_CLASSIFICATION: 'iconClassification',
    ICON_TAGS: 'iconTags',
    CREATED_AT: 'createdAt',
    ICON_BASE_64: 'iconBase64',
    ICON_DATA: 'iconData'
};
