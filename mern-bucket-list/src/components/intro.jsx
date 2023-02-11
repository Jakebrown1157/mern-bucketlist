import { Link } from 'react-router-dom'
import '../styles.css'


function Intro() {
    return(
        <div >
            <nav style={{display: 'flex',}}>
                <img src='' alt=''></img>
                <h1 style={{ display: 'flex', padding: 20, justifyContent: 'center', margin: 'auto'}}> Intro page </h1>
                <img src='' alt=''></img>
            </nav>

            <div style={{backgroundColor: 'lightgrey', width: '80vw', margin: 'auto'}}>
                <p style={{width: '60vw', margin: 'auto', padding: '20px'}}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Praesent dui augue, ultrices ut erat at, consequat volutpat risus. Cras vel massa neque.
                    Pellentesque vehicula laoreet commodo. Aliquam ac pellentesque leo. Donec sodales nunc eget magna auctor
                    luctus. Praesent eu volutpat diam. Sed eget cursus turpis, sit amet pulvinar neque. Nam in lorem at sem
                    vehicula condimentum. Fusce quis nulla non augue volutpat viverra non ut diam. Fusce id pharetra nibh,
                    eget convallis lectus. Suspendisse accumsan luctus est, et ornare nisi finibus mattis. In sit amet
                    euismod velit, in tincidunt ante. Etiam egestas tincidunt nibh, finibus tristique orci pellentesque 
                    id. Vivamus vel dui et magna mattis accumsan. Donec iaculis, massa ut sagittis dignissim, ligula 
                    tortor tempor orci, nec elementum tortor nisi ac mauris. Nam mattis dui eu ligula mollis, eu blandit
                    tellus tempor. Maecenas diam neque, iaculis ut condimentum sit amet, dignissim vitae neque.
                    Curabitur congue est et finibus elementum. Maecenas rhoncus odio id accumsan feugiat. Nulla
                    bibendum mollis maximus. Nunc in scelerisque neque. Nunc lacinia turpis ex, at dictum ante 
                    venenatis pellentesque. Cras iaculis ullamcorper magna sit amet dapibus. Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit. Nunc cursus vel mauris non suscipit. Nunc magna nisl, 
                    pulvinar ut maximus ut, molestie non sem. Orci varius natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Nam vitae neque non lorem dignissim mattis eu quis massa. Proin 
                    commodo massa nec lorem ornare hendrerit. Praesent iaculis leo sit amet erat suscipit pharetra 
                    eu non nisi. Quisque efficitur arcu in semper dictum. Mauris eu nulla nec sem cursus tempus. 
                    Praesent nec venenatis mauris. Sed malesuada massa eget aliquet facilisis. Vestibulum ante ipsum 
                    primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ultrices mauris eros, 
                    ut vulputate dui fringilla eu. Nullam et pretium tellus, nec cursus risus. Donec tempus leo 
                    metus, aliquam finibus nibh porttitor vel. Vivamus mauris dolor, fermentum ut dolor id, euismod 
                    porta sapien. Vivamus hendrerit ipsum sodales dignissim ultrices. Donec id tempor eros, a 
                    elementum lacus. Donec volutpat at sem nec posuere. Maecenas egestas, massa at posuere ultricies,
                    felis tortor suscipit lorem, eget condimentum sem massa et neque. Praesent sit amet egestas 
                    metus. Sed ac elementum tortor, non auctor orci. Nulla quis eros vulputate, accumsan ex quis, 
                    ultricies felis. Donec sed placerat dolor. Proin vel blandit neque. Vivamus id nulla vel sapien
                    iaculis mattis eget id tellus. Donec gravida urna in metus mattis, et porttitor sem interdum. 
                    Fusce at mauris non urna facilisis dignissim eget ut dui. Sed quis elementum nibh. Suspendisse 
                    ornare lorem vel mi maximus, vitae accumsan leo ullamcorper. Proin accumsan pretium erat vel 
                    tristique. Fusce purus enim, lacinia non finibus ut, dignissim egestas ex. Mauris finibus 
                    eros eu dolor pulvinar, vulputate pretium massa commodo. Etiam malesuada ex vehicula sodales 
                    cursus. Suspendisse elementum condimentum ipsum, vel mollis turpis sagittis sit amet. Vestibulum
                    tincidunt pellentesque purus, ut sodales est pretium sit amet. Phasellus efficitur leo quis 
                    tellus sagittis, ut efficitur arcu dignissim. Nulla auctor odio nisl, eu auctor nisi ornare 
                    at. Ut metus sapien, volutpat nec nunc nec, auctor egestas erat. Phasellus vitae sem ac dolor
                    tincidunt congue vel vitae mi. Curabitur hendrerit malesuada augue elementum malesuada. Ut 
                    fringilla sem at cursus dignissim.
                </p>
            </div>
            <br></br>
            <Link to='/home' style={{ display: 'flex', padding: 20, justifyContent: 'center', backgroundColor: 'grey', width: '80vw', margin: 'auto'}}>
                <br></br>
                <button className='btn-primary'>Enter if you dare!!</button>
            </Link>
        </div>
    )
}

export default Intro


