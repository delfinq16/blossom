import md5 from 'md5'; 
import wkwcpos_variable from './config';

export const GenerateHash = (session_id) => {
    let pkey = wkwcpos_variable.WK_USER_PKEY ? window.atob(wkwcpos_variable.WK_USER_PKEY) : '';
    let phash = wkwcpos_variable.WK_USER_PHASH ? window.atob(wkwcpos_variable.WK_USER_PHASH) : ''; 
    let hash1 =  md5(pkey + ":" + phash); 
    let hash2 = md5(hash1.toLowerCase() + ':' + session_id); 

    return hash2.toLowerCase();
}

export const GetSessionId = () => {

    if(localStorage) {
        return localStorage.getItem("WKWCPOS_API_SESSION_ID");
    } else {
        return '';
    }
}

export const POSGetRequest = (url) => {

    return new Promise( (resolve, reject) => {

        let session_id = GetSessionId(); 
        let hash = session_id ? GenerateHash(session_id) : '';

        fetch( url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',   
                'authkey' : hash
            })
        })
        .then(response => response.json())
        .then(json => { 

            if( Object.keys(json).length > 0  ) {

                if( json.success === false && json.session_id && json.status === 401 ) { 

                    _setSession(json.session_id);

                    POSGetRequest(url).then((res) => {
                        resolve(res);
                    });

                } else { 

                    resolve(json);

                } 

            }

        } )
        .catch(() => {

            resolve([]);
        });  
    })
}

export const POSPostRequest = (url, post) => {

    post.logged_in_user_id = apif_script.logged_in.user_id

    return new Promise( (resolve, reject) => {

        let session_id = GetSessionId(); 

        let hash = session_id ? GenerateHash(session_id) : '';

        fetch( url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authkey' : hash
            }),
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(json => {

            if( Object.keys(json).length > 0  ) {

                if( json.success === false && json.session_id && json.status === 401) {

                    _setSession(json.session_id);

                    POSPostRequest(url, post).then((res) => {
                        resolve(res);
                    });

                } else { 

                    resolve(json);

                }

            }

            resolve(json);

        } )
        .catch(() => {

            resolve([]);
        });  
    })
}

export const POSGetSessionIDRequest = (url) => {

    const post = {
        logged_in_user_id: apif_script.logged_in.user_id
    }

    return new Promise( (resolve, reject) => {

        let session_id = GetSessionId(); 
        let hash = session_id ? GenerateHash(session_id) : '';

        fetch( url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',   
                'authkey' : hash
            }),
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(json => { 
            
            if( json.success === false && json.session_id && json.status === 401 ) { 

                _setSession(json.session_id);
                resolve([]);

            } else { 

                resolve([]);

            } 

        } )
        .catch(() => {

            resolve([]);
        });

    })
}

const _setSession = (session_id) => {

    if( localStorage ) {

        localStorage.setItem( "WKWCPOS_API_SESSION_ID", session_id );

    }
}