import Link from 'next/link'

export default function about() {
    return (
        <>
            <Link href='/'><a className='btn btn-back'>Go Back</a></Link>
            <div className='card card-page'>
                <h1 className='post-title'>About</h1>
                <div className='post-body'>
                    <div>
                        <p>This app was created by Steven Bash following the &quot;Static Blog With Next.js and Markdown&quot; tutorial by Traversy Media</p>
                    </div>
                </div>
            </div>
        </>
    )
}