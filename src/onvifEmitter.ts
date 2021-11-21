import {ICommand, IDataEmitter, IDataEvent, IEmitterDescription, IDataEventListener, IDataEventListenerFunc, IDisposable, IExecutionResult, IFormatSettings, ISettings, IStatusChangeListener, IStatusChangeListenerFunc, IStatusEvent} from '@curium.rocks/data-emitter-base';

/**
 * 
 */
export class OnvifEmitter implements IDataEmitter {

    private _id: string;
    private _name: string;
    private _description: string;

    /**
     * 
     */
    public get id() : string {
        return this._id;
    }

    /**
     * 
     */
    public get name() : string { 
        return this._name;
    }

    /**
     * 
     */
    public get description(): string {
        return this._description;
    }

    /**
     * 
     * @param {IEmitterDescription} description 
     */
    constructor(description: IEmitterDescription) {
        this._id = description.id;
        this._name = description.name;
        this._description = description.description;
    }


    /**
     * 
     * @param {IDataEventListener | IDataEventListenerFunc} listener 
     */
    onData(listener: IDataEventListener | IDataEventListenerFunc): IDisposable {
        throw new Error('Method not implemented.');
    }
    /**
     * 
     * @param {IStatusChangeListener | IStatusChangeListenerFunc} listener 
     */
    onStatus(listener: IStatusChangeListener | IStatusChangeListenerFunc): IDisposable {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param {ISettings} settings 
     */
    applySettings(settings: ISettings): Promise<IExecutionResult> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param {ICommand} command 
     */
    sendCommand(command: ICommand): Promise<IExecutionResult> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     */
    probeStatus(): Promise<IStatusEvent> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     */
    probeCurrentData(): Promise<IDataEvent> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     */
    toJSON(): Record<string, unknown> {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     * @param {IFormatSettings} settings 
     */
    serializeState(settings: IFormatSettings): Promise<string> {
        throw new Error('Method not implemented.');
    }

}