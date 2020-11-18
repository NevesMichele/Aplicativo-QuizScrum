import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Scrum from './pages/Scrum';
import Guia from './pages/Guia';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import Question6 from './pages/Question6';
import Question7 from './pages/Question7';
import Question8 from './pages/Question8';
import Question9 from './pages/Question9';
import Question10 from './pages/Question10';
import Question11 from './pages/Question11';
import Question12 from './pages/Question12';
import Winner from './pages/Winner';
import Loses from './pages/Loses';
import Sobre from './pages/Sobre';
import Questionario from './pages/Questionario';
import Politica from './pages/Politica';














const Routes = createAppContainer(
    createStackNavigator({


        Main: {
            screen: Main,
            navigationOptions: {
                headerTintColor: '#0d1a2b',
                headerTitleAlign: 'center',
                headerTransparent: true,
                headerShown: false,
                
                headerStyle: {
                    backgroundColor: '#0d1a2b',


                }

            },
        },
        Scrum: {
            screen: Scrum,
            navigationOptions: {
                title: 'Scrum',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },

        Guia: {
            screen: Guia,
            navigationOptions: {
                title: 'Guia Scrum',
                headerTitleAlign: 'center',


                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },

        Question1: {
            screen: Question1,
            navigationOptions: {
                title: 'Questão 1',
                headerTitleAlign: 'center',

                headerShown: false,
                headerStyle: {
                    backgroundColor: '#0d1a2b',


                }

            },

        },
        Question2: {
            screen: Question2,
            navigationOptions: {
                title: 'Questão 2',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },







        Question3: {
            screen: Question3,
            navigationOptions: {
                title: 'Questão 3',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },


        Question4: {
            screen: Question4,
            navigationOptions: {
                title: 'Questão 4',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },
        Question5: {
            screen: Question5,
            navigationOptions: {
                title: 'Questão 5',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },
        
        
        Question6: {
            screen: Question6,
            navigationOptions: {
                title: 'Questão 6',
                headerTitleAlign: 'center',
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },
         Question7: {
            screen: Question7,
            navigationOptions: {
                title: 'Questão 7',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        Question8: {
            screen: Question8,
            navigationOptions: {
                title: 'Questão 8',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        Question9: {
            screen: Question9,
            navigationOptions: {
                title: 'Questão 9',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        Question10: {
            screen: Question10,
            navigationOptions: {
                title: 'Questão 10',
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },


        
        Question11: {
            screen: Question11,
            navigationOptions: {
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },


        
        Question12: {
            screen: Question12,
            navigationOptions: {
                headerTitleAlign: 'center',
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },
        },

        Winner: {
            screen: Winner,
            navigationOptions: {
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        Loses: {
            screen: Loses,
            navigationOptions: {
                headerTitleAlign: 'center',
                headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        
        Sobre: {
            screen: Sobre,
            navigationOptions: {
                title:' Desenvolvimeto',
                headerTitleAlign: 'center',


                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        Questionario: {
            screen: Questionario,
            navigationOptions: {
                title:' Questionário',
                headerTitleAlign: 'center',
              //  headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        Politica: {
            screen:Politica,
            navigationOptions: {
                title:' Politica de privacidade',
               // headerTitleAlign: 'center',
              //  headerShown: false,

                headerStyle: {
                    backgroundColor: '#0d1a2b',

                }
            },

        },
        
       








    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',

            headerStyle: {
                headerTransparent: true,
                


            }
        }
    }
    )
);

export default Routes;



