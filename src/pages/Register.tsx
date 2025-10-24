import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link to="/" className="mb-4 inline-block">
            <img src="/logo.png" alt="AvePay Logo" className="h-14 mx-auto" />
          </Link>
          <CardTitle className="text-2xl">Criar uma conta</CardTitle>
          <CardDescription>
            Insira os seus dados para começar a usar a AvePay.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Nome da Empresa</Label>
            <Input id="company-name" placeholder="Sua Empresa Lda." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemplo@suaempresa.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full">Criar Conta</Button>
          </a>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer" className="underline">
              Entrar
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;