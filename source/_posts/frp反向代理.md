## frps反向代理

### docker-compose.yml

```yaml
version: '3'
services:
  golang:
    image: docker.1ms.run/snowdreamtech/frps
    network_mode: host
    container_name: frp
    volumes:
      - ./frps.ini:/etc/frp/frps.ini
```
### frps.ini

```ini
[common]
bind_port = 6999
```

## frpc反向代理

### docker-compose.yml

```yaml
version: '3'
services:
  frps:
    image: docker.1ms.run/snowdreamtech/frpc:0.57.0
    network_mode: host
    container_name: frp-ssh
    volumes:
      - ./frpc.ini:/etc/frp/frpc.toml
    restart: always
```

### frpc.ini
```ini
serverAddr="richole.cn"
serverPort=6999

[[proxies]]
name="ssh"
type="tcp"
localIP="localhost"
localPort=22
remotePort=10000
```