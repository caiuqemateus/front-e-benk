-- Inserir usuário administrador padrão (senha: Admin123!)
INSERT INTO users (id, email, username, password, first_name, last_name, balance, role, is_verified) 
VALUES (
    'd4e5f607-1234-4901-9876-456789012345',
    'admin@casino.com',
    'admin',
    '$2b$10$QuJK6Bu4RPGCkV1sfLj7n.Ou03mtq5hPqZ04uM64OBu7WqO2G22pG',
    'Administrador',
    'Sistema',
    10000.00,
    'admin',
    true
);