[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7186390&assignment_repo_type=AssignmentRepo)
# week4-assigment-vuetemplate
Separation of the bsadmin template to components with vue

Bsadmin verilen düz html css şablonun vue'de bileşenlere ayrıldı, Express.js ile oluşturulan rest-api deki posts, users ve todos verileri vue appine çağırıldı.

.components. 
├─ SideBar.vue. 
├─ ContentWrapper.vue. 
├─ .sideBar. 
 |      ├─ SideBarBrand.vue. 
 |      ├─ SideBarDivider.vue. 
 |      ├─ SideBarHeading.vue. 
 |      ├─ SideBarNavItem.vue. 
 |      ├─ SideBarNavItemMenu.vue. 
 |      └─ SideBarToggler.vue. 
└─ .contentWrapper. 
        ├─ MainContent.vue. 
        └─ .mainContent. 
                ├─ PageContent.vue. 
                ├─ TopBar.vue. 
                └─ .topBar. 
                        ├─ TopBarNavBar.vue. 
                        ├─ TopBarSearchVue. 
                        ├─ SideBarToggle.vue. 
                        └─ .topBarNavBar. 
                                ├─ NavItemAlerts.vue. 
                                ├─ NavItemMessages.vue. 
                                ├─ NavItemUserInfo.vue. 
                                └─ SearchDropdown.vue. 
                                
https://user-images.githubusercontent.com/76963353/156247650-8a4afce6-c066-47f8-97d7-f5d98f0881f3.mov


## Installation

Öncelikle projeyi clonelayın. 

`git clone https://github.com/171-Logo-Siber-FullStack-Bootcamp/week4-assignment-emrecolak-23.git`

## Usage

Projeyi cloneladıktan sonra Visual Studio Code programında açınız.

Linux için:

`cd my-first-app
code .`

## Contributing

Pull requestler kabul edilir. Büyük değişiklikler için,lütfen önce neyi değiştirmek istediğinizi tartışmak için bir konu açınız.

## License

[MIT](https://choosealicense.com/licenses/mit/)
