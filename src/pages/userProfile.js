const UserProfile=({user})=>{

    console.log('(userProfile.js)user:',user);
    return <>
        <h2 className="mt-5">{user.name}의 상세 정보</h2>
        <table className="table table-bordered">
            <tbody>
            <tr>
                <th className='w-25 bg-dark text-white text-center'>아이디</th>
                <td>{user.username}</td>
            </tr>
            <tr>
                <th className='w-25 bg-dark text-white text-center'>비밀번호</th>
                <td>{user.password}</td>
            </tr>
            <tr>
                <th className='w-25 bg-dark text-white text-center'>이 름</th>
                <td>{user.name}</td>
            </tr>
            <tr >
                <th className='w-25 bg-dark text-white text-center'>프로필</th>
                <td>{user.profile}</td>
            </tr>
            </tbody>
        </table>    
    
    </>
};
export default UserProfile;