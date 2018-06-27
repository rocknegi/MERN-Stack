const secrets = {
    dbUri: 'mongodb://rocknegi:mern-stack69@ds219051.mlab.com:19051/mern-stack'
  };
  
export const getSecret = key => secrets[key];
 