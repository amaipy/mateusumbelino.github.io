class foot extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/foot/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'Rabbit' 
            },
            2: 
            {
                'name': 'Snake'  
            },
            3: 
            {
                'name': 'Toe' 
            },
            4: 
            {
                'name': 'reptil' 
            },
            5: 
            {
                'name': 'Timbs' 
            },
            6: 
            {
                'name': 'RedMonster' 
            },
            7: 
            {
                'name': 'PixelRobot' 
            },
        };
        super(id, path, options);
    }

}