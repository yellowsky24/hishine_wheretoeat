var mysql = require('mysql2/promise');

module.exports=async function change(number){
    var len=number.length;
    var query="select upso_nm as 'name', site_addr_rd as 'addr' from wte where ";
    var flag=0;
    
    
    for(let i=0;i<len;i++){
        
        var temp = number[i];
    

        if(i>0){
            query+=' or ';
        }

        if(temp=='정문'){
            query += "(admdng_nm = '대흥동' or admdng_nm = '서교동')";
        }
        else if(temp=='후문'){
            query += "admdng_nm = '염리동'";
        }
        else if(temp=='남문'){
            query += "(admdng_nm = '대흥동' or admdng_nm = '신수동')";
        }
        else if(temp=='신이'){
            query += "admdng_nm = '신촌동'";
        }
        else{
            flag=1;
            query += "site_addr_rd like '서울특별시 마포구 백범로 35%'";
        }
    }
    if(flag==0){
        query += " and site_addr_rd not like '서울특별시 마포구 백범로 35%' ";
    }
    query+=' order by rand() limit 1'
    console.log(query);
    const pool = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        waitForConnections: true,
        connectionLimit: 10,
        password: "dw3314",
        database: "wte"
    });
    const result = await pool.query(query);
    return result[0];
}
