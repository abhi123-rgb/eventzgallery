import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Index