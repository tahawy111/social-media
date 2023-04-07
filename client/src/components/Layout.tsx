import Navbar from './Navbar';

export default function Layout({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
}
