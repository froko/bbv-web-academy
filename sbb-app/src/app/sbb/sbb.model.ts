export interface Station {
  id: string;
  name: string;
}

export interface From {
  station: Station;
  departure: Date;
  platform: string;
}

export interface To {
  station: Station;
  arrival: Date;
  platform: string;
}

export interface Connection {
  from: From;
  to: To;
  duration: string;
}

export class FlatConnection {
  constructor(
    public from: string,
    public fromPlatform: string,
    public departure: Date,
    public to: string,
    public toPlatform: string,
    public arrival: Date,
    public duration: string
  ) {}
  static from(connection: Connection): FlatConnection {
    return new FlatConnection(
      connection.from.station.name,
      connection.from.platform,
      connection.from.departure,
      connection.to.station.name,
      connection.to.platform,
      connection.to.arrival,
      connection.duration
    );
  }
}
